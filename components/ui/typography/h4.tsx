import type { ComponentPropsWithoutRef } from 'react';

import { cloneElement, isValidElement } from 'react';

import { cn } from '@/lib/utils';

interface H4Props extends ComponentPropsWithoutRef<'h4'> {
  asChild?: boolean;
}

export function H4({ asChild, className, ...props }: H4Props) {
  const classes = cn(
    'text-gray-700 dark:text-gray-300 font-medium text-base',
    className,
  );

  if (!asChild) {
    return <h4 className={classes} {...props} />;
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
