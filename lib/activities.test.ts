import { describe, expect, it } from 'vitest';
import { z } from 'zod';

import { normalizeHealthExport } from './activities';

const run = {
  id: 'test-workout',
  name: 'Running',
  start: '2026-10-07 23:30:00 +0000',
  duration: 1800,
  distance: { qty: 5, units: 'km' },
};
function payload(workouts: unknown[]) {
  return { data: { workouts } };
}
describe('Health activity import', () => {
  it('retains only publishable running summaries and hashes source identifiers', () => {
    const [result] = normalizeHealthExport(
      payload([
        {
          ...run,
          route: [{ latitude: 48, longitude: 16 }],
          heartRate: { avg: 150 },
          metadata: { notes: 'private' },
        },
      ]),
    );
    expect(result).toEqual({
      id: expect.stringMatching(/^[a-f0-9]{64}$/),
      day: '2026-10-08',
      startedAt: 1791415800,
      durationSeconds: 1800,
      distanceKm: 5,
    });
    expect(JSON.stringify(result)).not.toContain('test-workout');
  });
  it.each([
    { qty: 3, units: 'mi', expected: 4.828 },
    { qty: 5000, units: 'm', expected: 5 },
  ])('converts $units to kilometres', ({ qty, units, expected }) => {
    const [result] = normalizeHealthExport(
      payload([{ ...run, distance: { qty, units } }]),
    );
    expect(result?.distanceKm).toBe(expected);
  });
  it('ignores other sports and runs without a usable distance', () => {
    expect(
      normalizeHealthExport(
        payload([
          { ...run, name: 'Cycling' },
          { ...run, distance: undefined },
          { ...run, distance: { qty: 0, units: 'km' } },
        ]),
      ),
    ).toEqual([]);
  });
  it('deduplicates the same run recorded by both watches', () => {
    const results = normalizeHealthExport(
      payload([
        run,
        {
          ...run,
          id: 'another-watch',
          start: '2026-10-07 23:30:30 +0000',
          duration: 1820,
        },
        run,
      ]),
    );
    expect(results).toHaveLength(1);
  });
  it('keeps separate sessions on the same day', () => {
    expect(
      normalizeHealthExport(
        payload([
          run,
          { ...run, id: 'evening', start: '2026-10-07 18:30:00 +0000' },
        ]),
      ),
    ).toHaveLength(2);
  });
  it('accepts ISO timestamps with explicit timezones', () => {
    expect(
      normalizeHealthExport(
        payload([{ ...run, start: '2026-10-07T23:30:00Z' }]),
      )[0]?.day,
    ).toBe('2026-10-08');
  });
  it.each(['2026-02-30 08:00:00 +0100', '2026-10-07T08:00:00', 'invalid'])(
    'rejects ambiguous or invalid timestamps: %s',
    (start) => {
      expect(() => normalizeHealthExport(payload([{ ...run, start }]))).toThrow(
        z.ZodError,
      );
    },
  );
  it('rejects unsupported units, negative duration, and excessive batch size', () => {
    expect(() =>
      normalizeHealthExport(
        payload([{ ...run, distance: { qty: 5, units: 'yards' } }]),
      ),
    ).toThrow(z.ZodError);
    expect(() =>
      normalizeHealthExport(payload([{ ...run, duration: -1 }])),
    ).toThrow(z.ZodError);
    expect(() =>
      normalizeHealthExport(payload(Array.from({ length: 501 }, () => run))),
    ).toThrow(z.ZodError);
  });
});
