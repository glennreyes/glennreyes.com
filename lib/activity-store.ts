import { and, desc, gte, lte } from 'drizzle-orm';
import { cacheLife, cacheTag } from 'next/cache';

import { activitySummaries } from '@/drizzle/schema';
import type { RunningActivity } from '@/lib/activities';
import { isDuplicateRun } from '@/lib/activities';
import { db } from '@/lib/db';

export async function saveRunningActivities(activities: RunningActivity[]) {
  if (activities.length === 0) {
    return;
  }
  await db.transaction(async (transaction) => {
    for (const activity of activities) {
      const candidates = await transaction
        .select()
        .from(activitySummaries)
        .where(
          and(
            gte(activitySummaries.startedAt, activity.startedAt - 90),
            lte(activitySummaries.startedAt, activity.startedAt + 90),
          ),
        );
      const duplicate = candidates.find((candidate) =>
        isDuplicateRun(candidate, activity),
      );
      const row = { ...activity, id: duplicate?.id ?? activity.id };
      await transaction
        .insert(activitySummaries)
        .values(row)
        .onConflictDoUpdate({
          target: activitySummaries.id,
          set: {
            day: row.day,
            startedAt: row.startedAt,
            distanceKm: row.distanceKm,
            durationSeconds: row.durationSeconds,
          },
        });
    }
  });
}
export async function getRunningActivities() {
  'use cache';
  cacheLife('hours');
  cacheTag('activities');
  if (process.env.ACTIVITY_SYNC_TOKEN === undefined) {
    return [];
  }
  try {
    return await db
      .select({
        id: activitySummaries.id,
        day: activitySummaries.day,
        distanceKm: activitySummaries.distanceKm,
        durationSeconds: activitySummaries.durationSeconds,
      })
      .from(activitySummaries)
      .orderBy(desc(activitySummaries.startedAt))
      .limit(6);
  } catch {
    return [];
  }
}
