import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { stravaProfile } from '@/lib/site-content';
export const metadata: Metadata = {
  title: 'Sport',
  description: 'Running, HYROX, and a life on the move. Glenn Reyes.',
};
export default function SportPage() {
  return (
    <Page>
      <Page.Header
        meta="02 / On the move"
        lead="Running, strength, and everything in between."
      >
        Sport.
      </Page.Header>
      <div className="grid gap-6 md:grid-cols-2">
        <section className="bg-foreground text-background flex min-h-96 flex-col justify-between gap-16 rounded-4xl p-8 md:p-12">
          <span>01 / Going the distance</span>
          <div className="grid gap-6">
            <h2 className="font-medium">Running</h2>
            <p>
              A few marathons ahead in 2027. For now, getting out the door and
              putting one foot in front of the other.
            </p>
            <div>
              <SectionLink href="/sport/running">
                The running chapter
              </SectionLink>
            </div>
          </div>
          <span>One kilometre at a time.</span>
        </section>
        <section className="flex min-h-96 flex-col justify-between gap-16 rounded-4xl border p-8 md:p-12">
          <span className="text-muted-foreground">
            02 / A different challenge
          </span>
          <div className="grid gap-6">
            <h2 className="font-medium">HYROX</h2>
            <p>
              Running meets strength. Another way to challenge myself and keep
              showing up.
            </p>
            <div>
              <SectionLink href="/sport/hyrox">The HYROX chapter</SectionLink>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-3xl">
            <Image
              alt="A weighted sled on the gym track during Glenn’s session"
              className="object-cover"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              src="/media/sport/hyrox.webp"
            />
          </div>
        </section>
      </div>
      <section className="grid gap-5 border-t pt-8 md:grid-cols-2">
        <h2>The everyday sessions count, too.</h2>
        <div className="grid gap-6">
          <p className="text-muted-foreground">
            Commutes, mobility, cycling, and the smaller things that make
            movement part of my day.
          </p>
          <div>
            <SectionLink href={stravaProfile}>
              Follow along on Strava
            </SectionLink>
          </div>
        </div>
      </section>
    </Page>
  );
}
