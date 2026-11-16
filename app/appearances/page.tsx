import type { Metadata } from 'next';

import { AppearancesFeed } from '@/components/appearances/appearances-feed';
import { Page } from '@/components/ui/layout/page';
import { getAllEvents, mapEventsToFeed } from '@/lib/events';
import { getTimestamp } from '@/lib/time';

export const metadata: Metadata = {
  title: 'Appearances',
  twitter: {
    title: 'Appearances',
  },
};

async function AppearancesPage() {
  const allEvents = await getAllEvents();
  const events = mapEventsToFeed(allEvents);
  const now = await getTimestamp();

  return (
    <Page>
      <Page.Header lead="Discover where I'm making an impact in the tech community through my speaking and teaching engagements.">
        Appearances.
      </Page.Header>
      <AppearancesFeed events={events} now={now} />
    </Page>
  );
}

export default AppearancesPage;
