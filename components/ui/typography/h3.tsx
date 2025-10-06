import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type H3Props = ComponentPropsWithoutRef<'h3'>;

export function H3({ children, className, ...props }: H3Props) {
  const classes = cn(
    'text-base font-medium text-gray-700 dark:text-gray-300',
    className,
  );

  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  );
}
