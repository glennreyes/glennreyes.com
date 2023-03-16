import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface HeroProps extends Omit<ComponentPropsWithoutRef<'section'>, 'className'> {
  description: ReactNode;
  heading: ReactNode;
  subhead: ReactNode;
}

export function Hero({ children, description, heading, subhead, ...props }: HeroProps) {
  return (
    <section className="container mx-auto grid gap-8 py-16 px-4" {...props}>
      <div>
        <p className="font-medium">{subhead}</p>
        <div className="flex justify-between gap-4">
          <div className="grid gap-4">
            <h1 className="text-5xl font-extrabold tracking-tight">{heading}</h1>
            <p className="max-w-2xl leading-relaxed md:leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
