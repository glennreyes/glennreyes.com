import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: Extract<TElementType, 'article' | 'div' | 'p' | 'section'>;
};

export function Container<TElementType extends ElementType>({ as, className, ...props }: ContainerProps<TElementType>) {
  const classes = twMerge('container mx-auto px-4', className);
  const Component = as ?? 'div';

  return <Component className={classes} {...props} />;
}
