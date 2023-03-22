import type { ComponentPropsWithoutRef } from 'react';

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export function Section(props: SectionProps) {
  return <section className="grid gap-8 md:gap-12" {...props} />;
}
