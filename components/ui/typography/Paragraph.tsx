import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type ParagraphProps<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: Extract<TElementType, 'div' | 'p'>;
};

export function Paragraph<TElementType extends ElementType>({ as, className, ...props }: ParagraphProps<TElementType>) {
  const Component = as ?? 'p';
  const classes = twMerge('text-slate-500 dark:text-slate-400', className);

  return <Component className={classes} {...props} />;
}
