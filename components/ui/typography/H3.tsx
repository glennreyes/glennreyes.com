import type { ComponentPropsWithoutRef, ElementType } from 'react';

type H3Props<TElementType extends ElementType> = Omit<ComponentPropsWithoutRef<TElementType>, 'className'> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H3<TElementType extends ElementType>({ as, ...props }: H3Props<TElementType>) {
  const Component = as ?? 'h3';

  return <Component className="text-xl font-semibold tracking-tight" {...props} />;
}
