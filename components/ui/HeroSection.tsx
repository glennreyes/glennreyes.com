import type { ComponentProps } from 'react';

type HeroSectionProps = Omit<ComponentProps<'section'>, 'className'>;

export function HeroSection({ children, ...props }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-yellow-300 to-transparent px-4 md:px-8" {...props}>
      <div className="mx-auto grid max-w-5xl gap-8 py-24 md:gap-16 md:py-64">{children}</div>
    </section>
  );
}
