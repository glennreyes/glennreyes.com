import type { ComponentPropsWithoutRef } from 'react';

type H4Props = Omit<ComponentPropsWithoutRef<'h4'>, 'className'>;

export function H4(props: H4Props) {
  return <h4 {...props} />;
}
