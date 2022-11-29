import type { ImageProps } from 'next/image';
import type { ComponentProps, ReactElement, ReactNode } from 'react';

interface HeroSectionProps extends Omit<ComponentProps<'section'>, 'className'> {
  description: ReactNode;
  heading: ReactNode;
  image: ReactElement<ImageProps>;
  subhead: ReactNode;
}

export function HeroSection({ children, description, heading, image, subhead, ...props }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-yellow-300 to-transparent px-4 md:px-8" {...props}>
      <div className="mx-auto grid max-w-5xl gap-8 py-24 md:gap-16 md:py-56">
        <div>
          <p className="text-sm font-medium text-orange-600 sm:text-base md:text-xl">{subhead}</p>
          <div className="flex justify-between gap-4">
            <div className="grid gap-4 md:max-w-4xl">
              <h1 className="text-4xl font-bold text-zinc-800 sm:text-6xl md:text-8xl">{heading}</h1>
              <p className="text-sm text-zinc-600 sm:text-base md:text-xl">{description}</p>
            </div>
            {image}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
