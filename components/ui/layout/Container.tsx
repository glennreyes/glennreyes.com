import type { ComponentPropsWithoutRef } from 'react';

type ContainerProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export function Container(props: ContainerProps) {
  return <section className="container mx-auto flex flex-col gap-12 px-4" {...props} />;
}

type ContainerHeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'className'>;

function ContainerHeader(props: ContainerHeaderProps) {
  return <header className="grid gap-4" {...props} />;
}

Container.Header = ContainerHeader;
