import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type H3Props = ComponentPropsWithoutRef<'h3'>;

export function H3({ children, className, ...props }: H3Props) {
  const classes = cn(
    'text-base font-medium text-neutral-700 dark:text-neutral-300',
    className,
  );

  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  );
}
