import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type H2Props<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H2<TElementType extends ElementType>({ as, className, ...props }: H2Props<TElementType>) {
  const Component = as ?? 'h2';
  const classes = twMerge('text-2xl font-bold tracking-tight', className);

  return <Component className={classes} {...props} />;
}
