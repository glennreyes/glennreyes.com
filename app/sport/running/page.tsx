import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ActivitySummary } from '@/components/site/activity-summary';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
import { stravaProfile } from '@/lib/site-content';
export const metadata: Metadata = {
  title: 'Running',
  description: 'The road to a few marathons in 2027. Running with Glenn Reyes.',
};
export default function RunningPage() {
  return (
    <Page>
      <Page.Header meta="Sport / Running" lead="One kilometre at a time.">
        Running.
      </Page.Header>
      <section className="grid gap-10 md:grid-cols-2">
        <div className="grid content-start gap-6">
          <p>
            There are a few marathons on my horizon in 2027. This is where
            I&apos;ll share the build-up, the races, and what I learn along the
            way.
          </p>
          <p className="text-muted-foreground">
            Sometimes it&apos;s a Garmin run. Sometimes it&apos;s the Apple
            Watch. What matters to me is getting out there.
          </p>
          <div>
            <SectionLink href={stravaProfile}>My runs on Strava</SectionLink>
          </div>
        </div>
        <div className="bg-foreground text-background grid gap-6 rounded-4xl p-10">
          <p>Looking ahead</p>
          <h2 className="font-medium">Marathon season, 2027.</h2>
          <ul className="grid gap-6">
            <li className="grid gap-2">
              <h3>Vienna City Marathon</h3>
              <p>18 April 2027 · Confirmed</p>
              <SectionLink href="https://www.vienna-marathon.com/index.html?go=marathon&amp;lang=en">
                VCM 2027
              </SectionLink>
            </li>
            <li className="grid gap-2">
              <h3>BIM 2027</h3>
              <p>Confirmed · More to come</p>
            </li>
          </ul>
        </div>
      </section>
      <Suspense
        fallback={
          <p className="text-muted-foreground">Loading recent running…</p>
        }
      >
        <ActivitySummary />
      </Suspense>
      <div>
        <SectionLink href="/sport">All sport</SectionLink>
      </div>
    </Page>
  );
}
