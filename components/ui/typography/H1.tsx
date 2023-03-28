import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type H1Props<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H1<TElementType extends ElementType>({ as, className, ...props }: H1Props<TElementType>) {
  const Component = as ?? 'h1';
  const classes = twMerge(
    'inline-flex bg-gradient-to-r from-black to-stone-500 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl sm:leading-tight',
    className,
  );

  return <Component className={classes} {...props} />;
}
