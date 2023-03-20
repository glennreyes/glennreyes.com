import type { ComponentPropsWithoutRef } from 'react';

type H2Props = Omit<ComponentPropsWithoutRef<'h2'>, 'className'>;

export function H2(props: H2Props) {
  return <h2 className="text-3xl font-bold tracking-tight" {...props} />;
}
