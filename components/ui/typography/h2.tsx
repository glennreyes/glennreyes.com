import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type H2Props = ComponentPropsWithoutRef<'h2'>;

export function H2({ children, className, ...props }: H2Props) {
  const classes = cn(
    'text-slate-700 dark:text-slate-300 font-medium',
    className,
  );

  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  );
}
