import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type SelectProps = ComponentPropsWithoutRef<'select'>;

export function Select({ className, ...props }: SelectProps) {
  const classes = cn(
    'rounded-2xl border border-slate-300 px-5 py-3 text-start font-medium text-slate-600 opacity-0 focus-visible:border-slate-400 focus-visible:text-slate-700 focus-visible:ring-4 focus-visible:ring-teal-100 disabled:bg-slate-50',
    className,
  );

  return <select className={classes} {...props} />;
}
