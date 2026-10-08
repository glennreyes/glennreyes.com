import { ArrowDown } from 'lucide-react';
import { MediaCard } from '@/components/site/media-card';
import { SectionLink } from '@/components/site/section-link';
import { freedivingMedia } from '@/lib/site-content';
export function Hero() {
  const cover = freedivingMedia.find((media) => media.id === 'blue');
  return (
    <section className="grid gap-8 lg:grid-cols-5 lg:gap-12">
      <div className="flex flex-col justify-between gap-6 py-4 lg:col-span-2 lg:gap-12 lg:py-10">
        <div className="text-muted-foreground flex items-center gap-3">
          <span className="bg-foreground size-2 rounded-full" />
          Vienna, Austria
        </div>
        <div className="grid max-w-sm gap-5 lg:gap-7">
          <h1 className="font-medium">Hello, I&apos;m Glenn.</h1>
          <p>
            I build software, find quiet underwater, and keep moving on land.
          </p>
          <p className="text-muted-foreground">
            Software engineer. Freediver. Runner. A few parts of the same life.
          </p>
          <div>
            <SectionLink href="/about">A little about me</SectionLink>
          </div>
        </div>
        <a
          className="inline-flex min-h-11 w-fit items-center gap-4 rounded-full px-2"
          href="#explore"
        >
          <ArrowDown aria-hidden="true" className="size-4" />A look around
        </a>
      </div>
      {cover !== undefined ? (
        <MediaCard
          className="lg:h-hero h-96 lg:col-span-3"
          media={cover}
          priority
        />
      ) : null}
    </section>
  );
}
