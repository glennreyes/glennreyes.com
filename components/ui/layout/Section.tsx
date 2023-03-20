import type { ComponentPropsWithoutRef } from 'react';

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export function Section(props: SectionProps) {
  return <section className="grid gap-8 px-4 md:gap-12" {...props} />;
}
