import Image from 'next/image';

import speaking from '@/assets/images/speaking.jpg';
import { SectionLink } from '@/components/site/section-link';

export function Hero() {
  return (
    <section className="bg-muted grid items-stretch overflow-hidden rounded-md md:grid-cols-2">
      <div className="grid content-center gap-6 p-7 md:p-10 lg:p-12">
        <div className="grid gap-2">
          <h1 className="font-medium">Hello, I&apos;m Glenn.</h1>
          <p className="text-muted-foreground">
            Software engineer based in Vienna.
          </p>
        </div>
        <p className="max-w-sm">
          I build for the web, explore AI interfaces, and teach what I learn.
        </p>
        <div className="flex flex-wrap gap-x-6">
          <SectionLink href="#projects">Selected projects</SectionLink>
          <SectionLink href="/tech/ai">AI & interfaces</SectionLink>
        </div>
      </div>
      <figure className="relative min-h-64 overflow-hidden bg-black lg:min-h-80">
        <Image
          alt="Glenn speaking at a software conference"
          className="object-cover grayscale"
          fill
          placeholder="blur"
          preload
          quality={90}
          sizes="(max-width: 767px) 100vw, (min-width: 1360px) 630px, 50vw"
          src={speaking}
        />
      </figure>
    </section>
  );
}
