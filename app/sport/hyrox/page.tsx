import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
export const metadata: Metadata = {
  title: 'HYROX',
  description: 'Running meets strength. The HYROX chapter with Glenn Reyes.',
};
export default function HyroxPage() {
  return (
    <Page>
      <Page.Header meta="Sport / HYROX" lead="Running meets strength.">
        HYROX.
      </Page.Header>
      <section className="grid gap-10 md:grid-cols-2">
        <div className="grid content-start gap-6">
          <p>
            HYROX has become another part of how I move. It brings a different
            challenge alongside running and gives me a reason to keep working on
            strength.
          </p>
          <p className="text-muted-foreground">
            A space for sessions, events, and a few moments along the way.
          </p>
          <div>
            <SectionLink href="/sport/running">The running side</SectionLink>
          </div>
        </div>
        <figure className="grid gap-4">
          <div className="aspect-portrait relative overflow-hidden rounded-4xl">
            <Image
              alt="Glenn pushing a weighted sled down the gym track"
              className="object-cover"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              src="/media/sport/hyrox.webp"
            />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-muted-foreground">
              A little work in the gym · October 2026
            </p>
            <SectionLink href="https://www.instagram.com/glnnreyes/reel/DeG4OCCtiGY/">
              Watch the session
            </SectionLink>
          </figcaption>
        </figure>
      </section>
    </Page>
  );
}
