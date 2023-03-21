import { formatISODuration } from 'date-fns';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';

interface ReadingTimeProps extends Omit<ComponentPropsWithoutRef<'time'>, 'dateTime'> {
  value: ReadTimeResults;
}

export function ReadingTime({ value }: ReadingTimeProps) {
  const dateTime = formatISODuration({ minutes: value.minutes });

  return <time dateTime={dateTime}>{value.text}</time>;
}
