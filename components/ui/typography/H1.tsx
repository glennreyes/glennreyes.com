import type { ComponentPropsWithoutRef } from 'react';

type H1Props = Omit<ComponentPropsWithoutRef<'h1'>, 'className'>;

export function H1(props: H1Props) {
  return <h1 className="text-5xl font-extrabold tracking-tight" {...props} />;
}
