import type { ComponentPropsWithoutRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export const Container = ({ asChild, className, ...props }: ContainerProps) => {
  const classes = cn('container mx-auto px-4', className);
  const Component = asChild ? Slot : 'div';

  return <Component className={classes} {...props} />;
};
