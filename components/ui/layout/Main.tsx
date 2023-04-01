import type { ComponentPropsWithoutRef } from 'react';

export type MainProps = Omit<ComponentPropsWithoutRef<'main'>, 'className'>;

export function Main(props: MainProps) {
  return <main className="my-16 space-y-16 lg:my-24" {...props} />;
}
