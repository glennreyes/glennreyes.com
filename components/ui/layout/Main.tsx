import type { ComponentPropsWithoutRef } from 'react';

export type MainProps = Omit<ComponentPropsWithoutRef<'main'>, 'className'>;

export function Main(props: MainProps) {
  return <main className="space-y-12" {...props} />;
}
