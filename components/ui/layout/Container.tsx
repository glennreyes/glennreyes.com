import type { ComponentPropsWithoutRef } from 'react';

type ContainerProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export function Container(props: ContainerProps) {
  return <section className="container mx-auto flex flex-col gap-12 px-4" {...props} />;
}
