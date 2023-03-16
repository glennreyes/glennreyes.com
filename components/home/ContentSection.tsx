import type { ComponentPropsWithoutRef } from 'react';

type ContentSectionProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function ContentSection(props: ContentSectionProps) {
  return (
    <section className="container mx-auto grid grid-cols-12">
      <div className="col-span-full lg:col-span-7" {...props} />
    </section>
  );
}
