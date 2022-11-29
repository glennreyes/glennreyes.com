import type { ComponentProps } from 'react';

type PhotosSectionProps = Omit<ComponentProps<'section'>, 'className'>;

export function PhotosSection(props: PhotosSectionProps) {
  return <section className="flex justify-center overflow-hidden" {...props} />;
}
