import type { Metadata } from 'next';

import { Suspense } from 'react';

import { AppearancesFeed } from '@/components/appearances/appearances-feed';
import { FeedLoading } from '@/components/ui/layout/feed-loading';
import { Page } from '@/components/ui/layout/page';
import { getAllEvents, mapEventsToFeed } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Appearances',
  twitter: {
    title: 'Appearances',
  },
};

async function AppearancesList() {
  const allEvents = await getAllEvents();
  const events = mapEventsToFeed(allEvents);

  return <AppearancesFeed events={events} />;
}

function AppearancesPage() {
  return (
    <Page>
      <Page.Header lead="Discover where I'm making an impact in the tech community through my speaking and teaching engagements.">
        Appearances.
      </Page.Header>
      <Suspense fallback={<FeedLoading count={5} />}>
        <AppearancesList />
      </Suspense>
    </Page>
  );
}

export default AppearancesPage;
