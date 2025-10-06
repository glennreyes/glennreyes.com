import type { ComponentPropsWithoutRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  asChild?: boolean;
}

export function Paragraph({ asChild, className, ...props }: ParagraphProps) {
  const classes = cn('text-gray-500 dark:text-gray-400', className);
  const Component = asChild ? Slot : 'p';

  return <Component className={classes} {...props} />;
}
