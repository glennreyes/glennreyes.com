import type { ComponentProps } from 'react';

type MainProps = Omit<ComponentProps<'main'>, 'className'>;

export function Main(props: MainProps) {
  return <main {...props} />;
}
