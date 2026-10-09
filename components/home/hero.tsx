import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { MediaCard } from '@/components/site/media-card';
import { Link } from '@/components/ui/link/link';
import { freedivingMedia } from '@/lib/site-content';

export function Hero() {
  const cover = freedivingMedia.find((media) => media.id === 'cave');
  return (
    <section className="grid gap-8" id="explore">
      <header className="flex flex-wrap items-start justify-between gap-4 pb-2">
        <h1 className="font-medium">Hello, I&apos;m Glenn.</h1>
        <p className="text-muted-foreground">
          Software engineer. Freediver. Runner.
        </p>
      </header>
      <div className="grid gap-5 lg:grid-cols-12">
        {cover !== undefined ? (
          <Link
            aria-label="Explore freediving"
            className="group grid gap-2 lg:col-span-7"
            href="/freediving"
          >
            <MediaCard
              className="h-hero"
              media={cover}
              priority
              showCaption={false}
            />
            <div className="flex min-h-11 items-center justify-between gap-4">
              <span>Freediving</span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform motion-safe:group-hover:translate-x-1"
              />
            </div>
          </Link>
        ) : null}
        <div className="grid content-start gap-8 lg:col-span-5">
          <Link
            aria-label="Explore running and HYROX"
            className="group grid gap-2"
            href="/sport"
          >
            <div className="relative h-80 overflow-hidden rounded-md bg-black">
              <Image
                alt="Glenn running at dusk during a race"
                className="object-cover object-top"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 40vw"
                src="/media/sport/running.webp"
              />
            </div>
            <div className="flex min-h-11 items-center justify-between gap-4">
              <span>Running & HYROX</span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform motion-safe:group-hover:translate-x-1"
              />
            </div>
          </Link>
          <Link
            aria-label="Explore Tech"
            className="group bg-muted grid min-h-48 content-between gap-8 rounded-md p-7"
            href="/tech"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-medium">Tech</h2>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform motion-safe:group-hover:translate-x-1"
              />
            </div>
            <p className="text-muted-foreground">
              Software, AI, and shared ideas.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
