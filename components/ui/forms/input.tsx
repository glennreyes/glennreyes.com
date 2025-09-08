import type { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input = ({ className, ...props }: InputProps) => {
  const classes = twMerge(
    'rounded-2xl border border-slate-300 px-5 py-3 text-left text-sm font-semibold tracking-tight text-slate-800 placeholder:text-slate-300 focus:border-slate-400 focus:text-slate-700 focus:ring-4 focus:ring-teal-100 disabled:opacity-75 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder:text-slate-700 dark:focus:border-slate-500 dark:focus:ring-teal-900/25',
    className,
  );

  return <input className={classes} {...props} />;
};
