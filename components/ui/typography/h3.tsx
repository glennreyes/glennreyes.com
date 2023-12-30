import type { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

type H3Props = ComponentPropsWithoutRef<'h3'>;

export function H3({ children, className, ...props }: H3Props) {
  const classes = twMerge(
    'text-xl text-slate-700 dark:text-slate-300 font-semibold tracking-tight',
    className,
  );

  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  );
}
