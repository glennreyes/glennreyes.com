import type { ComponentPropsWithoutRef } from 'react';

type ContentSectionProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function ContentSection(props: ContentSectionProps) {
  return <div className="col-span-full lg:col-span-7 xl:col-span-8" {...props} />;
}
