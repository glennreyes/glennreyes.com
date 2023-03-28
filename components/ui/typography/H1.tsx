import type { ComponentPropsWithoutRef, ElementType } from 'react';

type H1Props<TElementType extends ElementType> = Omit<ComponentPropsWithoutRef<TElementType>, 'className'> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H1<TElementType extends ElementType>({ as, ...props }: H1Props<TElementType>) {
  const Component = as ?? 'h1';

  return (
    <Component
      className="inline-flex bg-gradient-to-r from-black to-stone-500 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl sm:leading-tight"
      {...props}
    />
  );
}
