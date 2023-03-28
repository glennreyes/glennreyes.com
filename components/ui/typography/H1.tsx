import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type H1Props<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H1<TElementType extends ElementType>({ as, className, ...props }: H1Props<TElementType>) {
  const Component = as ?? 'h1';
  // TODO: Switch to tailwind-merge once it supports Tailwind 3.3
  const classes = clsx(
    'inline-flex bg-gradient-to-r from-black to-stone-500 bg-clip-text text-4xl/tight font-extrabold leading-tight text-transparent sm:text-5xl/tight',
    className,
  );

  return <Component className={classes} {...props} />;
}
