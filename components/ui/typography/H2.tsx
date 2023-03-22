import type { ComponentPropsWithoutRef, ElementType } from 'react';

type H2Props<TElementType extends ElementType> = Omit<ComponentPropsWithoutRef<TElementType>, 'className'> & {
  as?: Extract<TElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
};

export function H2<TElementType extends ElementType>({ as, ...props }: H2Props<TElementType>) {
  const Component = as ?? 'h2';

  return <Component className="text-2xl font-bold" {...props} />;
}
