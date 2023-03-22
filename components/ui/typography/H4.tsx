import type { ComponentPropsWithoutRef, ElementType } from 'react';

type H4Props<TElementType extends ElementType> = Omit<ComponentPropsWithoutRef<TElementType>, 'className'> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H4<TElementType extends ElementType>({ as, ...props }: H4Props<TElementType>) {
  const Component = as ?? 'h4';

  return <Component className="font-semibold tracking-tight" {...props} />;
}
