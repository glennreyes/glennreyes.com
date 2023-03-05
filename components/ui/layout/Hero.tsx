import type { ImageProps } from 'next/image';
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

interface HeroProps extends Omit<ComponentPropsWithoutRef<'section'>, 'className'> {
  description: ReactNode;
  heading: ReactNode;
  image: ReactElement<ImageProps>;
  subhead: ReactNode;
}

export function Hero({ children, description, heading, subhead, ...props }: HeroProps) {
  return (
    <section className="grid gap-8 py-32 md:gap-16 md:py-48" {...props}>
      <div className="md:grid md:gap-2">
        <p className="font-medium md:text-2xl">{subhead}</p>
        <div className="flex justify-between gap-4">
          <div className="grid gap-4 md:max-w-6xl md:gap-8">
            <h1 className="text-6xl font-extrabold tracking-tight md:text-9xl">{heading}</h1>
            <p className="leading-relaxed md:text-2xl md:leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
