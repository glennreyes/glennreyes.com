import type { ComponentPropsWithoutRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  asChild?: boolean;
}

export const Paragraph = ({ asChild, className, ...props }: ParagraphProps) => {
  const classes = twMerge('text-slate-500 dark:text-slate-400', className);
  const Component = asChild ? Slot : 'p';

  return <Component className={classes} {...props} />;
};
