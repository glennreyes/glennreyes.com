import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { RunningActivity } from '@/lib/activities';

const { save, revalidate } = vi.hoisted(() => ({
  save: vi.fn<(activities: RunningActivity[]) => Promise<void>>(),
  revalidate: vi.fn<(tag: string, profile: string) => void>(),
}));
vi.mock('@/lib/activity-store', () => ({ saveRunningActivities: save }));
vi.mock('next/cache', () => ({ revalidateTag: revalidate }));

import { POST } from './route';

const token = 'test-activity-token-at-least-32-characters';
const run = {
  id: 'run',
  name: 'Running',
  start: '2026-10-07 08:00:00 +0200',
  duration: 1800,
  distance: { qty: 5, units: 'km' },
};
function request(body: string, authorization = 'Bearer ' + token) {
  return new Request('http://localhost/api/integrations/health', {
    method: 'POST',
    body,
    headers: { authorization, 'content-type': 'application/json' },
  });
}
describe('Health import endpoint', () => {
  beforeEach(() => {
    vi.stubEnv('ACTIVITY_SYNC_TOKEN', token);
    save.mockReset();
    save.mockResolvedValue();
    revalidate.mockClear();
  });
  afterEach(() => {
    vi.unstubAllEnvs();
  });
  it('rejects unauthenticated imports without touching storage', async () => {
    expect((await POST(request('{}', 'Bearer wrong'))).status).toBe(401);
    expect(save).not.toHaveBeenCalled();
  });
  it('stays disabled until a sufficiently long token is configured', async () => {
    vi.stubEnv('ACTIVITY_SYNC_TOKEN', 'short');
    expect((await POST(request('{}'))).status).toBe(503);
    expect(save).not.toHaveBeenCalled();
  });
  it('validates and persists summaries, then invalidates their cache', async () => {
    const response = await POST(
      request(JSON.stringify({ data: { workouts: [run] } })),
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ imported: 1 });
    expect(save).toHaveBeenCalledWith([
      expect.objectContaining({ distanceKm: 5 }),
    ]);
    expect(revalidate).toHaveBeenCalledWith('activities', 'max');
  });
  it.each(['{invalid', '{"data":{"workouts":[{}]}}'])(
    'rejects malformed data',
    async (body) => {
      expect((await POST(request(body))).status).toBe(400);
      expect(save).not.toHaveBeenCalled();
    },
  );
  it('limits body size before parsing', async () => {
    expect((await POST(request('x'.repeat(1024 * 1024 + 1)))).status).toBe(413);
    expect(save).not.toHaveBeenCalled();
  });
  it('reports storage failure without exposing private details', async () => {
    save.mockRejectedValue(new Error('private database connection'));
    const response = await POST(
      request(JSON.stringify({ data: { workouts: [run] } })),
    );
    expect(response.status).toBe(503);
    expect(await response.text()).not.toContain('private database');
  });
  it('does not invalidate the cache for an empty import', async () => {
    expect((await POST(request('{"data":{"workouts":[]}}'))).status).toBe(200);
    expect(revalidate).not.toHaveBeenCalled();
  });
});
