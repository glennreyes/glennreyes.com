import type { ComponentPropsWithoutRef } from 'react';

type MainProps = Omit<ComponentPropsWithoutRef<'main'>, 'className'>;

export const Main = (props: MainProps) => (
  <main className="space-y-16 py-12 lg:py-24" id="main" {...props} />
);
