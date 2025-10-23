import type { Metadata } from 'next';

import { AppearancesFeed } from '@/components/appearances/appearances-feed';
import { Page } from '@/components/ui/layout/page';
import { getAllEvents, mapEventsToFeed } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Appearances',
  twitter: {
    title: 'Appearances',
  },
};

const AppearancesPage = async () => {
  const allEvents = await getAllEvents();
  const events = mapEventsToFeed(allEvents);

  return (
    <Page>
      <Page.Header lead="Discover where I'm making an impact in the tech community through my speaking and teaching engagements.">
        Appearances.
      </Page.Header>
      <AppearancesFeed events={events} />
    </Page>
  );
};

export default AppearancesPage;
