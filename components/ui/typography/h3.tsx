import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type H3Props = ComponentPropsWithoutRef<'h3'>;

export function H3({ children, className, ...props }: H3Props) {
  const classes = cn(
    'text-slate-700 dark:text-slate-300 font-medium',
    className,
  );

  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  );
}
