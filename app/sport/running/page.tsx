import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import { ActivitySummary } from '@/components/site/activity-summary';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { stravaProfile } from '@/lib/site-content';
export const metadata: Metadata = {
  title: 'Running',
  description: 'The road to marathon season, 2027. Running with Glenn Reyes.',
};
export default function RunningPage() {
  return (
    <Page>
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-medium">Running.</h1>
        <SectionLink href={stravaProfile}>My runs on Strava</SectionLink>
      </header>
      <section className="grid gap-8 md:grid-cols-2">
        <div className="aspect-portrait relative overflow-hidden rounded-md">
          <Image
            alt="Glenn running alongside the river in Vienna"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/media/sport/river.webp"
          />
        </div>
        <div className="grid content-center gap-8">
          <h2>Marathon season, 2027.</h2>
          <ul className="grid gap-8">
            <li className="grid gap-2 border-b pb-6">
              <h3>
                <SectionLink href="https://www.vienna-marathon.com/index.html?go=marathon&amp;lang=en">
                  Vienna City Marathon
                </SectionLink>
              </h3>
              <p className="text-muted-foreground">18 April 2027 · Confirmed</p>
            </li>
            <li className="grid gap-2">
              <h3>BIM 2027</h3>
              <p className="text-muted-foreground">Confirmed</p>
            </li>
          </ul>
        </div>
      </section>
      <Suspense
        fallback={<p className="text-muted-foreground">Loading recent runs…</p>}
      >
        <ActivitySummary />
      </Suspense>
      <SectionLink href="/sport">All sport</SectionLink>
    </Page>
  );
}
