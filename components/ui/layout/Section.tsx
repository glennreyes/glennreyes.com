import type { ComponentPropsWithoutRef } from 'react';

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export function Section(props: SectionProps) {
  return <section className="grid gap-6" {...props} />;
}
