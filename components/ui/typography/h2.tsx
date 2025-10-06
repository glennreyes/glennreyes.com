import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type H2Props = ComponentPropsWithoutRef<'h2'>;

export function H2({ children, className, ...props }: H2Props) {
  const classes = cn(
    'text-base font-medium text-gray-700 dark:text-gray-300',
    className,
  );

  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  );
}
