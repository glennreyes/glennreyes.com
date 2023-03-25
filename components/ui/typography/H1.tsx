import type { ComponentPropsWithoutRef, ElementType } from 'react';

type H1Props<TElementType extends ElementType> = Omit<ComponentPropsWithoutRef<TElementType>, 'className'> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H1<TElementType extends ElementType>({ as, ...props }: H1Props<TElementType>) {
  const Component = as ?? 'h1';

  return <Component className="text-4xl font-extrabold tracking-tight sm:text-5xl" {...props} />;
}
