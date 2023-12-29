import { format, isThisYear } from 'date-fns';
import type { ComponentPropsWithoutRef } from 'react';

interface DateDisplayProps extends ComponentPropsWithoutRef<'time'> {
  format?: string;
  value?: Date | string;
}

export function DateDisplay({
  format: formatString,
  value,
  ...props
}: DateDisplayProps) {
  if (value === undefined) {
    return <>Draft</>;
  }

  const date = value instanceof Date ? value : new Date(value);
  const dateTime = props.dateTime ?? format(date, 'yyyy-MM-dd');
  const text = format(
    date,
    formatString ?? (isThisYear(date) ? 'MMMM d' : 'MMMM d, yyyy'),
  );

  return (
    <time dateTime={dateTime} {...props}>
      {text}
    </time>
  );
}
