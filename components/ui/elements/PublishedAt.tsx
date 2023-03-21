import { format } from 'date-fns';
import type { ComponentPropsWithoutRef } from 'react';

interface PublishedAtProps extends Omit<ComponentPropsWithoutRef<'time'>, 'dateTime'> {
  value: string | undefined;
}

export function PublishedAt({ value }: PublishedAtProps) {
  if (!value) {
    return <>Draft</>;
  }

  const date = new Date(value);
  const dateTime = format(date, 'yyyy-MM-dd');
  const text = format(date, 'MMMM dd, yyyy');

  return <time dateTime={dateTime}>{text}</time>;
}
