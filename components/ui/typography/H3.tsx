import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type H3Props<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H3<TElementType extends ElementType>({ as, className, ...props }: H3Props<TElementType>) {
  const Component = as ?? 'h3';
  const classes = twMerge('text-xl text-slate-700 dark:text-slate-300 font-semibold tracking-tight', className);

  return <Component className={classes} {...props} />;
}
