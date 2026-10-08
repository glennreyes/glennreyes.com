import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('next/cache', () => ({ cacheLife: () => {}, cacheTag: () => {} }));
vi.mock('@/lib/db', async () => {
  const { createClient } = await import('@libsql/client');
  const { drizzle } = await import('drizzle-orm/libsql');
  const { readFile } = await import('node:fs/promises');
  const path = await import('node:path');
  const schema = await import('@/drizzle/schema');
  const client = createClient({ url: 'file::memory:' });
  const migration = await readFile(
    path.resolve(process.cwd(), 'drizzle/activity-summaries.sql'),
    'utf8',
  );
  await client.executeMultiple(migration);
  return { db: drizzle(client, { schema }) };
});
import { activitySummaries } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { getRunningActivities, saveRunningActivities } from './activity-store';

const run = {
  id: 'run-one',
  day: '2026-10-07',
  startedAt: 1791352800,
  distanceKm: 5,
  durationSeconds: 1800,
};
describe('Running journal storage', () => {
  beforeEach(async () => {
    vi.stubEnv('ACTIVITY_SYNC_TOKEN', 'test-token');
    await db.delete(activitySummaries);
  });
  afterAll(() => {
    vi.unstubAllEnvs();
    db.$client.close();
  });
  it('deduplicates two watch recordings arriving in different requests', async () => {
    await saveRunningActivities([run]);
    await saveRunningActivities([
      {
        ...run,
        id: 'run-from-other-watch',
        startedAt: run.startedAt + 30,
        durationSeconds: 1820,
      },
    ]);
    expect(await db.select().from(activitySummaries)).toHaveLength(1);
  });
  it('updates repeated source records without creating another run', async () => {
    await saveRunningActivities([run]);
    await saveRunningActivities([{ ...run, distanceKm: 5.5 }]);
    const stored = await db.select().from(activitySummaries);
    expect(stored).toHaveLength(1);
    expect(stored[0]?.distanceKm).toBe(5.5);
  });
  it('keeps separate sessions and returns the latest first', async () => {
    await saveRunningActivities([
      run,
      { ...run, id: 'run-two', startedAt: run.startedAt + 7200, distanceKm: 7 },
    ]);
    expect(
      (await getRunningActivities()).map((activity) => activity.distanceKm),
    ).toEqual([7, 5]);
  });
  it('does not expose source timestamps in the public projection', async () => {
    await saveRunningActivities([run]);
    expect(await getRunningActivities()).toEqual([
      { id: 'run-one', day: run.day, distanceKm: 5, durationSeconds: 1800 },
    ]);
  });
  it('stays hidden when disconnected and handles empty imports', async () => {
    await saveRunningActivities([]);
    vi.stubEnv('ACTIVITY_SYNC_TOKEN', undefined);
    expect(await getRunningActivities()).toEqual([]);
  });
});
