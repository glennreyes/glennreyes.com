import { format, isThisYear } from 'date-fns';
import type { ComponentPropsWithoutRef } from 'react';

interface DateDisplayProps extends Omit<ComponentPropsWithoutRef<'time'>, 'dateTime'> {
  format?: string;
  value: Date | string | undefined;
}

export function DateDisplay({ format: formatString, value, ...props }: DateDisplayProps) {
  if (value === undefined) {
    return <>Draft</>;
  }

  const date = new Date(value);
  const dateTime = format(date, 'yyyy-MM-dd');
  const text = format(date, formatString ?? (isThisYear(date) ? 'MMMM dd' : 'MMMM dd, yyyy'));

  return (
    <time dateTime={dateTime} {...props}>
      {text}
    </time>
  );
}
