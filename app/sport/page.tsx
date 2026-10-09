import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { stravaProfile } from '@/lib/site-content';
export const metadata: Metadata = {
  title: 'Sport',
  description: 'Running, HYROX, and life on the move with Glenn Reyes.',
};
export default function SportPage() {
  return (
    <Page>
      <header className="flex flex-wrap justify-between gap-4">
        <h1 className="font-medium">Sport.</h1>
        <p className="text-muted-foreground">
          Running, strength, and the everyday sessions.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        <section className="grid content-start gap-4">
          <div className="aspect-portrait relative overflow-hidden rounded-md">
            <Image
              alt="Glenn running at dusk during a race"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              src="/media/sport/running.webp"
            />
          </div>
          <h2>
            <SectionLink href="/sport/running">Running</SectionLink>
          </h2>
          <p className="text-muted-foreground">
            VCM & BIM. Marathon season, 2027.
          </p>
        </section>
        <section className="grid content-start gap-4 md:pt-16">
          <div className="aspect-portrait relative overflow-hidden rounded-md">
            <Image
              alt="Glenn pushing a weighted sled on the gym track"
              className="object-cover"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              src="/media/sport/hyrox.webp"
            />
          </div>
          <h2>
            <SectionLink href="/sport/hyrox">HYROX</SectionLink>
          </h2>
          <p className="text-muted-foreground">Running meets strength.</p>
        </section>
      </div>
      <section className="flex flex-wrap items-center justify-between gap-4 border-t pt-6">
        <h2>Commutes, mobility, and everything in between.</h2>
        <SectionLink href={stravaProfile}>Strava</SectionLink>
      </section>
    </Page>
  );
}
