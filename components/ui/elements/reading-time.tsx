import { formatISODuration } from 'date-fns';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';
import { z } from 'zod';

export function parseReadingTimeValue(value: unknown) {
  const result = z
    .object({ minutes: z.number(), text: z.string() })
    .safeParse(value);

  if (!result.success) {
    return null;
  }

  return result.data;
}

interface ReadingTimeProps
  extends Omit<ComponentPropsWithoutRef<'time'>, 'dateTime'> {
  value: Pick<ReadTimeResults, 'minutes' | 'text'> | null;
}

export function ReadingTime({ value, ...props }: ReadingTimeProps) {
  if (!value) {
    return null;
  }

  const dateTime = formatISODuration({ minutes: value.minutes });

  return (
    <time dateTime={dateTime} {...props}>
      {value.text}
    </time>
  );
}
