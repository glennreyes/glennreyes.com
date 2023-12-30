import type { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

type SelectProps = ComponentPropsWithoutRef<'select'>;

export function Select({ className, ...props }: SelectProps) {
  const classes = twMerge(
    'rounded-2xl border border-slate-300 px-5 py-3 text-left text-sm font-semibold tracking-tight text-slate-600 opacity-0 transition focus:border-slate-400 focus:text-slate-700 focus:ring-4 focus:ring-teal-100 disabled:bg-slate-50',
    className,
  );

  return <select className={classes} {...props} />;
}
