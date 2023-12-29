import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';

interface H4Props extends ComponentPropsWithoutRef<'h4'> {
  asChild?: boolean;
}

export function H4({ asChild, className, ...props }: H4Props) {
  const classes = twMerge(
    'text-lg text-slate-700 dark:text-slate-300 font-semibold tracking-tight',
    className,
  );
  const Component = asChild ? Slot : 'h4';

  return <Component className={classes} {...props} />;
}
