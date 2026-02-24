import type { ComponentPropsWithoutRef } from 'react';

import { cloneElement, isValidElement } from 'react';

import { cn } from '@/lib/utils';

interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  asChild?: boolean;
}

export function Paragraph({ asChild, className, ...props }: ParagraphProps) {
  const classes = cn('text-gray-500 dark:text-gray-400', className);

  if (!asChild) {
    return <p className={classes} {...props} />;
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
