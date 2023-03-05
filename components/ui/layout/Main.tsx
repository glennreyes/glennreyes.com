import type { ComponentPropsWithoutRef } from 'react';

type MainProps = Omit<ComponentPropsWithoutRef<'main'>, 'className'>;

export function Main(props: MainProps) {
  return <main className="container mx-auto px-4 md:px-8" {...props} />;
}
