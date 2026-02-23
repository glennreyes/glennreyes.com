#!/usr/bin/env bun

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/lib/db';
import {
  appearances,
  events,
  locations,
  talks,
  workshops,
} from '@/drizzle/schema';

const appearanceLengthValues = ['SHORT', 'MEDIUM', 'LONG'] as const;
const eventTypeValues = ['CLASS', 'CONFERENCE', 'MEETUP'] as const;
const locationTypeValues = [
  'CAFE',
  'COMPANY_OFFICE',
  'COWORKING_SPACE',
  'EVENT_HALL',
  'THEATER',
  'UNIVERSITY',
] as const;
const statusValues = ['ACTIVE', 'INACTIVE'] as const;

const appearanceSchema = z.object({
  dateTime: z.string().min(1),
  length: z.enum(appearanceLengthValues),
  recording: z.string().url().nullable().optional(),
  slug: z.string().min(1),
});

const payloadSchema = z.object({
  event: z.object({
    endDateTime: z.string().min(1),
    name: z.string().min(1),
    slug: z.string().min(1),
    startDateTime: z.string().min(1),
    type: z.enum(eventTypeValues).default('CONFERENCE'),
    url: z.string().url(),
  }),
  location: z.object({
    address: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
    name: z.string().min(1),
    state: z.string().nullable().optional(),
    type: z.enum(locationTypeValues).default('EVENT_HALL'),
    zip: z.string().min(1),
  }),
  talk: z.object({
    appearance: appearanceSchema,
    matchKeywords: z.array(z.string().min(1)).min(1),
  }),
  workshop: z.object({
    description: z.string().min(1),
    slug: z.string().min(1),
    status: z.enum(statusValues).default('ACTIVE'),
    summary: z.string().min(1),
    tags: z.array(z.string().min(1)).min(1),
    title: z.string().min(1),
  }),
  workshopAppearance: appearanceSchema,
});

type AppearancePayload = z.infer<typeof appearanceSchema>;
type Payload = z.infer<typeof payloadSchema>;

interface ParsedArguments {
  dryRun: boolean;
  payloadPath: string;
}

interface UpsertResult {
  action: 'created' | 'updated';
  id: string;
}

function parseArguments(argv: string[]): ParsedArguments {
  const dryRun = argv.includes('--dry-run');
  const unknownFlags = argv.filter(
    (argument) => argument.startsWith('--') && argument !== '--dry-run',
  );

  if (unknownFlags.length > 0) {
    throw new Error(`Unknown flags: ${unknownFlags.join(', ')}`);
  }

  const payloadPath = argv.find((argument) => !argument.startsWith('--'));

  if (payloadPath === undefined) {
    throw new Error(
      'Usage: bun scripts/upsert-conference-appearance.ts <payload.json> [--dry-run]',
    );
  }

  return { dryRun, payloadPath };
}

async function readPayload(payloadPath: string): Promise<Payload> {
  const absolutePath = resolve(process.cwd(), payloadPath);
  const rawContent = await readFile(absolutePath, 'utf8');

  const parsedJson: unknown = JSON.parse(rawContent);

  return payloadSchema.parse(parsedJson);
}

function parseDate(dateTime: string, label: string): Date {
  const date = new Date(dateTime);

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date for ${label}: "${dateTime}"`);
  }

  return date;
}

function generateId(): string {
  return crypto.randomUUID().replaceAll('-', '').slice(0, 24);
}

function normalizeText(value: string): string {
  return value.trim().toLowerCase();
}

function writeAction(dryRun: boolean, message: string): void {
  const prefix = dryRun ? '[dry-run] ' : '';

  process.stdout.write(`${prefix}${message}\n`);
}

async function resolveTalkByKeywords(keywords: string[]): Promise<{
  id: string;
  slug: string;
  title: string;
}> {
  const normalizedKeywords = keywords.map(normalizeText);

  const allTalks = await db.query.talks.findMany({
    columns: {
      id: true,
      slug: true,
      title: true,
    },
    orderBy: (table, { desc }) => [desc(table.createdAt)],
  });

  const exactMatches = allTalks.filter((talk) => {
    const searchable = `${talk.slug} ${talk.title}`.toLowerCase();

    return normalizedKeywords.every((keyword) => searchable.includes(keyword));
  });

  if (exactMatches.length === 1) {
    const matchedTalk = exactMatches[0];

    if (matchedTalk !== undefined) {
      return matchedTalk;
    }
  }

  const partialMatches = allTalks.filter((talk) => {
    const searchable = `${talk.slug} ${talk.title}`.toLowerCase();

    return normalizedKeywords.some((keyword) => searchable.includes(keyword));
  });

  const candidateList = partialMatches
    .map((talk) => `- ${talk.slug} (${talk.title})`)
    .join('\n');

  if (exactMatches.length === 0) {
    const candidateSuffix =
      partialMatches.length > 0
        ? `\n\nClosest candidates:\n${candidateList}`
        : '';

    throw new Error(
      `Could not auto-match talk with keywords: ${keywords.join(', ')}.${candidateSuffix}`,
    );
  }

  const ambiguousList = exactMatches
    .map((talk) => `- ${talk.slug} (${talk.title})`)
    .join('\n');

  throw new Error(
    `Auto-match for talk is ambiguous for keywords: ${keywords.join(', ')}.\n\nMatches:\n${ambiguousList}`,
  );
}

async function upsertLocation(
  payload: Payload['location'],
  now: Date,
  dryRun: boolean,
): Promise<UpsertResult> {
  const existingLocation = await db.query.locations.findFirst({
    columns: {
      id: true,
    },
    where: and(
      eq(locations.name, payload.name),
      eq(locations.address, payload.address),
      eq(locations.city, payload.city),
      eq(locations.country, payload.country),
      eq(locations.zip, payload.zip),
    ),
  });

  if (existingLocation !== undefined) {
    writeAction(
      dryRun,
      `Updating location "${payload.name}" (${existingLocation.id})`,
    );

    if (!dryRun) {
      await db
        .update(locations)
        .set({
          address: payload.address,
          city: payload.city,
          country: payload.country,
          name: payload.name,
          state: payload.state ?? null,
          type: payload.type,
          updatedAt: now,
          zip: payload.zip,
        })
        .where(eq(locations.id, existingLocation.id));
    }

    return {
      action: 'updated',
      id: existingLocation.id,
    };
  }

  const newLocationId = generateId();

  writeAction(dryRun, `Creating location "${payload.name}" (${newLocationId})`);

  if (!dryRun) {
    await db.insert(locations).values({
      address: payload.address,
      city: payload.city,
      country: payload.country,
      createdAt: now,
      id: newLocationId,
      name: payload.name,
      state: payload.state ?? null,
      type: payload.type,
      updatedAt: now,
      zip: payload.zip,
    });
  }

  return {
    action: 'created',
    id: newLocationId,
  };
}

async function upsertEvent(
  payload: Payload['event'],
  locationId: string,
  now: Date,
  dryRun: boolean,
): Promise<UpsertResult> {
  const existingEvent = await db.query.events.findFirst({
    columns: {
      id: true,
    },
    where: eq(events.slug, payload.slug),
  });

  const endDate = parseDate(payload.endDateTime, 'event.endDateTime');
  const startDate = parseDate(payload.startDateTime, 'event.startDateTime');

  if (existingEvent !== undefined) {
    writeAction(
      dryRun,
      `Updating event "${payload.slug}" (${existingEvent.id})`,
    );

    if (!dryRun) {
      await db
        .update(events)
        .set({
          endDate,
          locationId,
          name: payload.name,
          startDate,
          type: payload.type,
          updatedAt: now,
          url: payload.url,
        })
        .where(eq(events.id, existingEvent.id));
    }

    return {
      action: 'updated',
      id: existingEvent.id,
    };
  }

  const newEventId = generateId();

  writeAction(dryRun, `Creating event "${payload.slug}" (${newEventId})`);

  if (!dryRun) {
    await db.insert(events).values({
      createdAt: now,
      endDate,
      id: newEventId,
      locationId,
      name: payload.name,
      slug: payload.slug,
      startDate,
      type: payload.type,
      updatedAt: now,
      url: payload.url,
    });
  }

  return {
    action: 'created',
    id: newEventId,
  };
}

async function upsertWorkshop(
  payload: Payload['workshop'],
  now: Date,
  dryRun: boolean,
): Promise<UpsertResult> {
  const existingWorkshop = await db.query.workshops.findFirst({
    columns: {
      id: true,
    },
    where: eq(workshops.slug, payload.slug),
  });

  if (existingWorkshop !== undefined) {
    writeAction(
      dryRun,
      `Updating workshop "${payload.slug}" (${existingWorkshop.id})`,
    );

    if (!dryRun) {
      await db
        .update(workshops)
        .set({
          description: payload.description,
          status: payload.status,
          summary: payload.summary,
          tags: payload.tags,
          title: payload.title,
          updatedAt: now,
        })
        .where(eq(workshops.id, existingWorkshop.id));
    }

    return {
      action: 'updated',
      id: existingWorkshop.id,
    };
  }

  const newWorkshopId = generateId();

  writeAction(dryRun, `Creating workshop "${payload.slug}" (${newWorkshopId})`);

  if (!dryRun) {
    await db.insert(workshops).values({
      createdAt: now,
      description: payload.description,
      id: newWorkshopId,
      slug: payload.slug,
      status: payload.status,
      summary: payload.summary,
      tags: payload.tags,
      title: payload.title,
      updatedAt: now,
    });
  }

  return {
    action: 'created',
    id: newWorkshopId,
  };
}

async function upsertAppearance(
  payload: AppearancePayload,
  links: {
    eventId: string;
    talkId: string | null;
    workshopId: string | null;
  },
  now: Date,
  dryRun: boolean,
): Promise<UpsertResult> {
  const existingAppearance = await db.query.appearances.findFirst({
    columns: {
      id: true,
    },
    where: eq(appearances.slug, payload.slug),
  });

  const date = parseDate(payload.dateTime, `appearance ${payload.slug}`);

  if (existingAppearance !== undefined) {
    writeAction(
      dryRun,
      `Updating appearance "${payload.slug}" (${existingAppearance.id})`,
    );

    if (!dryRun) {
      await db
        .update(appearances)
        .set({
          date,
          eventId: links.eventId,
          length: payload.length,
          recording: payload.recording ?? null,
          talkId: links.talkId,
          updatedAt: now,
          workshopId: links.workshopId,
        })
        .where(eq(appearances.id, existingAppearance.id));
    }

    return {
      action: 'updated',
      id: existingAppearance.id,
    };
  }

  const newAppearanceId = generateId();

  writeAction(
    dryRun,
    `Creating appearance "${payload.slug}" (${newAppearanceId})`,
  );

  if (!dryRun) {
    await db.insert(appearances).values({
      createdAt: now,
      date,
      eventId: links.eventId,
      id: newAppearanceId,
      length: payload.length,
      recording: payload.recording ?? null,
      slug: payload.slug,
      talkId: links.talkId,
      updatedAt: now,
      workshopId: links.workshopId,
    });
  }

  return {
    action: 'created',
    id: newAppearanceId,
  };
}

async function run(): Promise<void> {
  const { dryRun, payloadPath } = parseArguments(process.argv.slice(2));
  const now = new Date();

  writeAction(dryRun, `Reading payload from ${payloadPath}`);

  const payload = await readPayload(payloadPath);
  const talk = await resolveTalkByKeywords(payload.talk.matchKeywords);

  writeAction(
    dryRun,
    `Matched talk "${talk.slug}" (${talk.id}) using keywords: ${payload.talk.matchKeywords.join(', ')}`,
  );

  const locationResult = await upsertLocation(payload.location, now, dryRun);
  const eventResult = await upsertEvent(
    payload.event,
    locationResult.id,
    now,
    dryRun,
  );
  const workshopResult = await upsertWorkshop(payload.workshop, now, dryRun);

  const talkAppearanceResult = await upsertAppearance(
    payload.talk.appearance,
    {
      eventId: eventResult.id,
      talkId: talk.id,
      workshopId: null,
    },
    now,
    dryRun,
  );

  const workshopAppearanceResult = await upsertAppearance(
    payload.workshopAppearance,
    {
      eventId: eventResult.id,
      talkId: null,
      workshopId: workshopResult.id,
    },
    now,
    dryRun,
  );

  writeAction(dryRun, 'Done.');
  writeAction(dryRun, 'Summary:');
  writeAction(
    dryRun,
    `- Location: ${locationResult.action} (${locationResult.id})`,
  );
  writeAction(dryRun, `- Event: ${eventResult.action} (${eventResult.id})`);
  writeAction(
    dryRun,
    `- Workshop: ${workshopResult.action} (${workshopResult.id})`,
  );
  writeAction(
    dryRun,
    `- Talk appearance: ${talkAppearanceResult.action} (${talkAppearanceResult.id})`,
  );
  writeAction(
    dryRun,
    `- Workshop appearance: ${workshopAppearanceResult.action} (${workshopAppearanceResult.id})`,
  );
}

async function main(): Promise<void> {
  try {
    await run();
  } catch (error) {
    console.error('Failed to upsert conference appearance data.');

    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }

    process.exit(1);
  }
}

await main();
