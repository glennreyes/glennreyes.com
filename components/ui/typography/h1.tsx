import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type H1Props = ComponentPropsWithoutRef<'h1'>;

export const H1 = ({ children, className, ...props }: H1Props) => {
  const classes = cn('font-medium', className);

  return (
    <h1 className={classes} {...props}>
      <span className="inline-block bg-gradient-to-r from-slate-950 to-slate-600 bg-clip-text pr-2 text-transparent dark:from-slate-50 dark:to-slate-400">
        {children}
      </span>
    </h1>
  );
};
