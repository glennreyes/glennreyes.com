import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type H1Props<TElementType extends ElementType> = ComponentPropsWithoutRef<TElementType> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H1<TElementType extends ElementType>({ as, children, className, ...props }: H1Props<TElementType>) {
  const Component = as ?? 'h1';
  // TODO: Switch to tailwind-merge once it supports Tailwind 3.3
  const classes = clsx('text-4xl/tight sm:text-5xl/tight font-extrabold tracking-tighter', className);

  return (
    <Component className={classes} {...props}>
      <span className="inline-block bg-gradient-to-r from-black to-slate-500 bg-clip-text text-transparent">
        {children}
      </span>
    </Component>
  );
}
