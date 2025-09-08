import type { ComponentPropsWithoutRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

interface H4Props extends ComponentPropsWithoutRef<'h4'> {
  asChild?: boolean;
}

export const H4 = ({ asChild, className, ...props }: H4Props) => {
  const classes = twMerge(
    'text-slate-700 dark:text-slate-300 font-medium text-base',
    className,
  );
  const Component = asChild ? Slot : 'h4';

  return <Component className={classes} {...props} />;
};
