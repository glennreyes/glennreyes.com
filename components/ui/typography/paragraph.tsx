import type { ComponentPropsWithoutRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  asChild?: boolean;
}

export const Paragraph = ({ asChild, className, ...props }: ParagraphProps) => {
  const classes = cn('text-slate-500 dark:text-slate-400', className);
  const Component = asChild ? Slot : 'p';

  return <Component className={classes} {...props} />;
};
