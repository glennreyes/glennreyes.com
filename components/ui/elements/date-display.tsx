import type { ComponentPropsWithoutRef } from 'react';

import { format } from 'date-fns';

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
  const resolvedFormat = formatString ?? 'MMMM d, yyyy';
  const text = format(date, resolvedFormat);

  return (
    <time dateTime={dateTime} {...props}>
      {text}
    </time>
  );
}
