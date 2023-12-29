import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type H4Props = ComponentPropsWithoutRef<'h4'>;

export function H4({ className, ...props }: H4Props) {
  const classes = twMerge(
    'text-lg text-slate-700 dark:text-slate-300 font-semibold tracking-tight',
    className,
  );

  return <h4 className={classes} {...props} />;
}
