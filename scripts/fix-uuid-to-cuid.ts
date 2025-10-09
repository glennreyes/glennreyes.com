#!/usr/bin/env tsx

import { createId } from '@paralleldrive/cuid2';
import { eq } from 'drizzle-orm';

import * as schema from '../drizzle/schema';
import { db } from '../lib/db';

// UUID v4 pattern: 8-4-4-4-12 hexadecimal characters
const UUID_V4_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

interface IDMapping {
  oldId: string;
  newId: string;
}

const isUUID = (id: string): boolean => UUID_V4_PATTERN.test(id);
const log = (message: string): void => {
  process.stdout.write(`${message}\n`);
};

async function fixUUIDs() {
  log('🔍 Searching for UUID v4 IDs...\n');

  const locationMappings: IDMapping[] = [];
  const eventMappings: IDMapping[] = [];
  const talkMappings: IDMapping[] = [];
  const workshopMappings: IDMapping[] = [];
  const appearanceMappings: IDMapping[] = [];
  // Check locations
  const locations = await db.query.locations.findMany();

  for (const location of locations) {
    if (isUUID(location.id)) {
      const newId = createId();

      locationMappings.push({ oldId: location.id, newId });
      log(
        `📍 Location: "${location.name}" has UUID: ${location.id} → ${newId}`,
      );
    }
  }

  // Check events
  const events = await db.query.events.findMany();

  for (const event of events) {
    if (isUUID(event.id)) {
      const newId = createId();

      eventMappings.push({ oldId: event.id, newId });
      log(`📅 Event: "${event.name}" has UUID: ${event.id} → ${newId}`);
    }
  }

  // Check talks
  const talks = await db.query.talks.findMany();

  for (const talk of talks) {
    if (isUUID(talk.id)) {
      const newId = createId();

      talkMappings.push({ oldId: talk.id, newId });
      log(`🎤 Talk: "${talk.title}" has UUID: ${talk.id} → ${newId}`);
    }
  }

  // Check workshops
  const workshops = await db.query.workshops.findMany();

  for (const workshop of workshops) {
    if (isUUID(workshop.id)) {
      const newId = createId();

      workshopMappings.push({ oldId: workshop.id, newId });
      log(
        `🛠️  Workshop: "${workshop.title}" has UUID: ${workshop.id} → ${newId}`,
      );
    }
  }

  // Check appearances
  const appearances = await db.query.appearances.findMany();

  for (const appearance of appearances) {
    if (isUUID(appearance.id)) {
      const newId = createId();

      appearanceMappings.push({ oldId: appearance.id, newId });
      log(
        `👤 Appearance: ${appearance.slug} has UUID: ${appearance.id} → ${newId}`,
      );
    }
  }

  const totalMappings =
    locationMappings.length +
    eventMappings.length +
    talkMappings.length +
    workshopMappings.length +
    appearanceMappings.length;

  if (totalMappings === 0) {
    log('✅ No UUIDs found. All IDs are already CUIDs!');

    return;
  }

  log(`\n📝 Found ${totalMappings} UUID(s) to convert.\n`);
  log('🔄 Starting conversion...\n');

  // We need to delete and recreate rows due to SQLite foreign key constraints
  // Order: appearances → workshops → talks → events → locations

  // 1. Store and delete ALL appearances that either:
  //    - Have UUID IDs themselves
  //    - Reference entities with UUID IDs
  const appearancesToRecreate = [];

  for (const appearance of appearances) {
    const hasUuidId = isUUID(appearance.id);
    const referencesUuidEvent =
      appearance.eventId !== null &&
      eventMappings.some((m) => m.oldId === appearance.eventId);
    const referencesUuidTalk =
      appearance.talkId !== null &&
      talkMappings.some((m) => m.oldId === appearance.talkId);
    const referencesUuidWorkshop =
      appearance.workshopId !== null &&
      workshopMappings.some((m) => m.oldId === appearance.workshopId);

    if (
      hasUuidId ||
      referencesUuidEvent ||
      referencesUuidTalk ||
      referencesUuidWorkshop
    ) {
      // Determine the new ID
      const newId = hasUuidId
        ? (appearanceMappings.find((m) => m.oldId === appearance.id)?.newId ??
          appearance.id)
        : appearance.id;

      appearancesToRecreate.push({ ...appearance, id: newId });

      await db
        .delete(schema.appearances)
        .where(eq(schema.appearances.id, appearance.id));
      log(
        `✓ Deleted appearance: ${appearance.id} (hasUuid: ${hasUuidId}, refsUuid: ${referencesUuidEvent || referencesUuidTalk || referencesUuidWorkshop})`,
      );
    }
  }

  // 2. Update workshops
  for (const { oldId, newId } of workshopMappings) {
    const workshop = workshops.find((w) => w.id === oldId);

    if (workshop !== undefined) {
      await db.delete(schema.workshops).where(eq(schema.workshops.id, oldId));
      await db.insert(schema.workshops).values({ ...workshop, id: newId });
      log(`✓ Updated workshop: ${oldId} → ${newId}`);
    }
  }

  // 3. Update talks
  for (const { oldId, newId } of talkMappings) {
    const talk = talks.find((t) => t.id === oldId);

    if (talk !== undefined) {
      await db.delete(schema.talks).where(eq(schema.talks.id, oldId));
      await db.insert(schema.talks).values({ ...talk, id: newId });
      log(`✓ Updated talk: ${oldId} → ${newId}`);
    }
  }

  // 4. Update events
  for (const { oldId, newId } of eventMappings) {
    const event = events.find((e) => e.id === oldId);

    if (event !== undefined) {
      await db.delete(schema.events).where(eq(schema.events.id, oldId));
      await db.insert(schema.events).values({ ...event, id: newId });
      log(`✓ Updated event: ${oldId} → ${newId}`);
    }
  }

  // 5. Update locations
  for (const { oldId, newId } of locationMappings) {
    const location = locations.find((l) => l.id === oldId);

    if (location !== undefined) {
      await db.delete(schema.locations).where(eq(schema.locations.id, oldId));
      await db.insert(schema.locations).values({ ...location, id: newId });
      log(`✓ Updated location: ${oldId} → ${newId}`);
    }
  }

  // 6. Recreate appearances with updated foreign key references
  for (const appearance of appearancesToRecreate) {
    // Update foreign key references to new CUIDs
    const updatedAppearance = { ...appearance };

    if (appearance.eventId !== null) {
      const eventMapping = eventMappings.find(
        (m) => m.oldId === appearance.eventId,
      );

      if (eventMapping !== undefined) {
        updatedAppearance.eventId = eventMapping.newId;
      }
    }

    if (appearance.talkId !== null) {
      const talkMapping = talkMappings.find(
        (m) => m.oldId === appearance.talkId,
      );

      if (talkMapping !== undefined) {
        updatedAppearance.talkId = talkMapping.newId;
      }
    }

    if (appearance.workshopId !== null) {
      const workshopMapping = workshopMappings.find(
        (m) => m.oldId === appearance.workshopId,
      );

      if (workshopMapping !== undefined) {
        updatedAppearance.workshopId = workshopMapping.newId;
      }
    }

    await db.insert(schema.appearances).values(updatedAppearance);
    log(`✓ Recreated appearance: ${updatedAppearance.id}`);
  }

  log(`\n✅ Successfully converted ${totalMappings} UUID(s) to CUID!`);
}

fixUUIDs().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
