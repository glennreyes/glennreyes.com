import type { ComponentPropsWithoutRef } from 'react';

type ContentSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'className'>;

export function ContentSection(props: ContentSectionProps) {
  return <section className="container mx-auto grid gap-16 px-4 lg:grid-cols-12" {...props} />;
}
