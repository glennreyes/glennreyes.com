import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';

import { formatISODuration } from 'date-fns';

interface ReadingTimeProps
  extends Omit<ComponentPropsWithoutRef<'time'>, 'dateTime'> {
  value: Pick<ReadTimeResults, 'minutes' | 'text'>;
}

export function ReadingTime({ value, ...props }: ReadingTimeProps) {
  const dateTime = formatISODuration({ minutes: value.minutes });

  return (
    <time dateTime={dateTime} {...props}>
      {value.text}
    </time>
  );
}
