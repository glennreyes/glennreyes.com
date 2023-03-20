import type { ComponentPropsWithoutRef } from 'react';

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export function Section(props: SectionProps) {
  return <section className="grid gap-4 px-4" {...props} />;
}
