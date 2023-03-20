import type { ComponentPropsWithoutRef } from 'react';

export type MainProps = Omit<ComponentPropsWithoutRef<'main'>, 'className'>;

export function Main(props: MainProps) {
  return <main className="grid gap-12" {...props} />;
}
