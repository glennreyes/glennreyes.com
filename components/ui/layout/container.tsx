import type { ComponentPropsWithoutRef } from 'react';

import { cloneElement, isValidElement } from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export function Container({ asChild, className, ...props }: ContainerProps) {
  const classes = cn('container mx-auto px-4', className);

  if (!asChild) {
    return <div className={classes} {...props} />;
  }

  const { children, ...rest } = props;

  if (
    !isValidElement<Record<string, unknown> & { className?: string }>(children)
  ) {
    return null;
  }

  return cloneElement(children, {
    ...rest,
    className: cn(classes, children.props.className),
  });
}
