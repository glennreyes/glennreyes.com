import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type H4Props<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H4<TElementType extends ElementType>({ as, className, ...props }: H4Props<TElementType>) {
  const Component = as ?? 'h4';
  const classes = twMerge('text-lg font-semibold tracking-tight', className);

  return <Component className={classes} {...props} />;
}
