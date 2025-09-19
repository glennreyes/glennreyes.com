import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type InputProps = ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...props }: InputProps) {
  const classes = cn(
    'rounded-xl border border-slate-300 px-5 py-3 text-start font-medium text-slate-800 placeholder:text-slate-300 focus-visible:border-slate-400 focus-visible:text-slate-700 focus-visible:ring-4 focus-visible:ring-teal-100 disabled:opacity-75 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder:text-slate-700 dark:focus-visible:border-slate-500 dark:focus-visible:ring-teal-900/25',
    className,
  );

  return <input className={classes} {...props} />;
}
