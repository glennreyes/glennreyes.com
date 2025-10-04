import { eq } from 'drizzle-orm';

import { db } from '../lib/db';
import {
  appearances,
  events,
  locations,
  talks,
  workshops,
} from '../drizzle/schema';

const EM_DASH = '—';

async function findEmDashes() {
  console.log('🔍 Searching for em dashes (—) in database content...\n');

  // Check talks
  const allTalks = await db.select().from(talks);
  const talksWithEmDash = allTalks.filter(
    (talk) =>
      talk.title.includes(EM_DASH) || talk.abstract.includes(EM_DASH),
  );

  if (talksWithEmDash.length > 0) {
    console.log(`📢 Found ${talksWithEmDash.length} talks with em dashes:`);
    talksWithEmDash.forEach((talk) => {
      console.log(`  - ${talk.title} (${talk.slug})`);
      if (talk.title.includes(EM_DASH)) {
        console.log(`    Title: "${talk.title}"`);
      }
      if (talk.abstract.includes(EM_DASH)) {
        console.log(`    Abstract: "${talk.abstract.slice(0, 100)}..."`);
      }
    });
    console.log();
  }

  // Check workshops
  const allWorkshops = await db.select().from(workshops);
  const workshopsWithEmDash = allWorkshops.filter(
    (workshop) =>
      workshop.title.includes(EM_DASH) ||
      workshop.summary.includes(EM_DASH) ||
      workshop.description.includes(EM_DASH) ||
      (workshop.curriculum && workshop.curriculum.includes(EM_DASH)),
  );

  if (workshopsWithEmDash.length > 0) {
    console.log(
      `🛠️  Found ${workshopsWithEmDash.length} workshops with em dashes:`,
    );
    workshopsWithEmDash.forEach((workshop) => {
      console.log(`  - ${workshop.title} (${workshop.slug})`);
      if (workshop.title.includes(EM_DASH)) {
        console.log(`    Title: "${workshop.title}"`);
      }
      if (workshop.summary.includes(EM_DASH)) {
        console.log(`    Summary: "${workshop.summary.slice(0, 100)}..."`);
      }
      if (workshop.description.includes(EM_DASH)) {
        console.log(
          `    Description: "${workshop.description.slice(0, 100)}..."`,
        );
      }
    });
    console.log();
  }

  // Check events
  const allEvents = await db.select().from(events);
  const eventsWithEmDash = allEvents.filter((event) =>
    event.name.includes(EM_DASH),
  );

  if (eventsWithEmDash.length > 0) {
    console.log(`📅 Found ${eventsWithEmDash.length} events with em dashes:`);
    eventsWithEmDash.forEach((event) => {
      console.log(`  - ${event.name} (${event.slug})`);
    });
    console.log();
  }

  // Check locations
  const allLocations = await db.select().from(locations);
  const locationsWithEmDash = allLocations.filter(
    (location) =>
      location.name.includes(EM_DASH) || location.address.includes(EM_DASH),
  );

  if (locationsWithEmDash.length > 0) {
    console.log(
      `📍 Found ${locationsWithEmDash.length} locations with em dashes:`,
    );
    locationsWithEmDash.forEach((location) => {
      console.log(`  - ${location.name}`);
      if (location.address.includes(EM_DASH)) {
        console.log(`    Address: "${location.address}"`);
      }
    });
    console.log();
  }

  const totalWithEmDash =
    talksWithEmDash.length +
    workshopsWithEmDash.length +
    eventsWithEmDash.length +
    locationsWithEmDash.length;

  if (totalWithEmDash === 0) {
    console.log('✅ No em dashes found in database content!\n');
  } else {
    console.log(`📊 Total items with em dashes: ${totalWithEmDash}\n`);
  }

  return {
    talks: talksWithEmDash,
    workshops: workshopsWithEmDash,
    events: eventsWithEmDash,
    locations: locationsWithEmDash,
  };
}

async function updateStatuses(dryRun = true) {
  console.log(
    `${dryRun ? '🔍 DRY RUN:' : '✏️'} Updating talks and workshops to INACTIVE...\n`,
  );

  // Get current talks and workshops
  const allTalks = await db.select().from(talks);
  const allWorkshops = await db.select().from(workshops);

  const activeTalks = allTalks.filter((talk) => talk.status === 'ACTIVE');
  const activeWorkshops = allWorkshops.filter(
    (workshop) => workshop.status === 'ACTIVE',
  );

  console.log(`📢 Talks to update: ${activeTalks.length}`);
  activeTalks.forEach((talk) => {
    console.log(`  - ${talk.title} (${talk.slug}): ACTIVE → INACTIVE`);
  });
  console.log();

  console.log(`🛠️  Workshops to update: ${activeWorkshops.length}`);
  activeWorkshops.forEach((workshop) => {
    console.log(`  - ${workshop.title} (${workshop.slug}): ACTIVE → INACTIVE`);
  });
  console.log();

  if (!dryRun) {
    // Update all talks to INACTIVE
    for (const talk of activeTalks) {
      await db
        .update(talks)
        .set({ status: 'INACTIVE', updatedAt: new Date() })
        .where(eq(talks.id, talk.id));
    }

    // Update all workshops to INACTIVE
    for (const workshop of activeWorkshops) {
      await db
        .update(workshops)
        .set({ status: 'INACTIVE', updatedAt: new Date() })
        .where(eq(workshops.id, workshop.id));
    }

    console.log('✅ Successfully updated all talks and workshops to INACTIVE!\n');
  } else {
    console.log('ℹ️  This was a dry run. No changes were made.\n');
  }

  return {
    talksUpdated: activeTalks.length,
    workshopsUpdated: activeWorkshops.length,
  };
}

async function main() {
  console.log('🚀 Starting database update process...\n');
  console.log('═'.repeat(60));
  console.log();

  // Step 1: Find em dashes
  const emDashResults = await findEmDashes();

  console.log('═'.repeat(60));
  console.log();

  // Step 2: Dry run for status updates
  await updateStatuses(true);

  console.log('═'.repeat(60));
  console.log();

  // Step 3: Actual update
  console.log('⚠️  Proceeding with actual updates...\n');
  await updateStatuses(false);

  console.log('═'.repeat(60));
  console.log('\n✨ Database update process complete!\n');

  process.exit(0);
}

main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
