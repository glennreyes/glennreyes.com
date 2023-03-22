import type { ComponentPropsWithoutRef } from 'react';

type H3Props = Omit<ComponentPropsWithoutRef<'h3'>, 'className'>;

export function H3(props: H3Props) {
  return <h3 className="text-xl font-semibold tracking-tight" {...props} />;
}
