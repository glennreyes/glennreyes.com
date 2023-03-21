import { format, isThisYear } from 'date-fns';
import type { ComponentPropsWithoutRef } from 'react';

interface PublishedAtProps extends Omit<ComponentPropsWithoutRef<'time'>, 'dateTime'> {
  value: string | undefined;
}

export function PublishedAt({ value, ...props }: PublishedAtProps) {
  if (!value) {
    return <>Draft</>;
  }

  const date = new Date(value);
  const dateTime = format(date, 'yyyy-MM-dd');
  const text = format(date, isThisYear(date) ? 'MMMM dd' : 'MMMM dd, yyyy');

  return (
    <time dateTime={dateTime} {...props}>
      {text}
    </time>
  );
}
