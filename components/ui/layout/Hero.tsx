import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface HeroProps extends Omit<ComponentPropsWithoutRef<'section'>, 'className'> {
  description: ReactNode;
  heading: ReactNode;
  name: string;
  photo: StaticImageData;
  subhead: ReactNode;
}

export function Hero({ children, description, heading, photo, name, subhead, ...props }: HeroProps) {
  return (
    <section className="container mx-auto py-16 px-4" {...props}>
      <div className="flex flex-col gap-8 lg:flex-row">
        <Image alt={name} className="h-36 w-36 rounded-full border-4 border-stone-200" src={photo} />
        <div className="grid gap-8">
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
        </div>
      </div>
    </section>
  );
}
