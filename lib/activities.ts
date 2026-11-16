import { createHash } from 'node:crypto';
import { isValid, parse, parseISO } from 'date-fns';
import { z } from 'zod';

function workoutDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}T/.test(value)
    ? parseISO(value)
    : parse(value, 'yyyy-MM-dd HH:mm:ss xx', new Date(0));
}
const workoutSchema = z.object({
  id: z.string().min(1).max(200),
  name: z.string().min(1).max(100),
  start: z
    .string()
    .max(50)
    .refine(
      (value) =>
        (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+-]\d{4}$/.test(value) ||
          /^\d{4}-\d{2}-\d{2}T.*(Z|[+-]\d{2}:\d{2})$/.test(value)) &&
        isValid(workoutDate(value)),
      'Invalid workout start',
    ),
  duration: z.number().finite().positive().max(86400),
  distance: z
    .object({
      qty: z.number().finite().nonnegative().max(1000000),
      units: z.enum(['km', 'mi', 'm']),
    })
    .optional(),
});
export const healthExportSchema = z.object({
  data: z.object({ workouts: z.array(workoutSchema).max(500) }),
});
export interface RunningActivity {
  id: string;
  day: string;
  startedAt: number;
  distanceKm: number;
  durationSeconds: number;
}
const dayFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Vienna',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
export function isDuplicateRun(
  first: RunningActivity,
  second: RunningActivity,
) {
  return (
    first.id === second.id ||
    (Math.abs(first.startedAt - second.startedAt) <= 90 &&
      Math.abs(first.durationSeconds - second.durationSeconds) <= 120 &&
      Math.abs(first.distanceKm - second.distanceKm) <= 0.2)
  );
}
export function normalizeHealthExport(input: unknown): RunningActivity[] {
  const { data } = healthExportSchema.parse(input);
  const runs = data.workouts.flatMap((workout) => {
    if (
      workout.name.toLowerCase() !== 'running' ||
      workout.distance === undefined
    ) {
      return [];
    }
    const factor =
      workout.distance.units === 'mi'
        ? 1.609344
        : workout.distance.units === 'm'
          ? 0.001
          : 1;
    const distanceKm = workout.distance.qty * factor;
    if (distanceKm <= 0 || distanceKm > 300) {
      return [];
    }
    const date = workoutDate(workout.start);
    return [
      {
        id: createHash('sha256').update(workout.id).digest('hex'),
        day: dayFormatter.format(date),
        startedAt: Math.floor(date.getTime() / 1000),
        distanceKm: Math.round(distanceKm * 1000) / 1000,
        durationSeconds: Math.round(workout.duration),
      },
    ];
  });
  return runs.filter(
    (run, index) =>
      runs.findIndex((candidate) => isDuplicateRun(candidate, run)) === index,
  );
}
