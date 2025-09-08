import type { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

type H2Props = ComponentPropsWithoutRef<'h2'>;

export const H2 = ({ children, className, ...props }: H2Props) => {
  const classes = twMerge(
    'text-slate-700 dark:text-slate-300 font-medium',
    className,
  );

  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  );
};
