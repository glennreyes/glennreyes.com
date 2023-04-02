import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...props }: InputProps) {
  const classes = twMerge(
    'rounded-2xl border border-slate-200 py-3 px-5 text-left text-sm font-semibold tracking-tight text-slate-600 transition placeholder:text-slate-300 focus:border-slate-300 focus:text-slate-700 focus:ring-4 focus:ring-teal-100 disabled:bg-slate-50',
    className,
  );

  return <input className={classes} {...props} />;
}
