import type { ComponentPropsWithoutRef } from 'react';

type MainProps = Omit<ComponentPropsWithoutRef<'main'>, 'className'>;

export function Main(props: MainProps) {
  return <main className="space-y-16 py-12 lg:py-24" id="main" {...props} />;
}
