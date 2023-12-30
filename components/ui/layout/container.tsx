import type { ComponentPropsWithoutRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export function Container({ asChild, className, ...props }: ContainerProps) {
  const classes = twMerge('container mx-auto px-4', className);
  const Component = asChild ? Slot : 'div';

  return <Component className={classes} {...props} />;
}
