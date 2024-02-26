import type { Metadata } from 'next';

import { AppearancesFeed } from '@/components/appearances/appearances-feed';
import { Page } from '@/components/ui/layout/page';
import { getAllEvents } from '@/lib/events';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Appearances',
  twitter: {
    title: 'Appearances',
  },
};

const AppearancesPage = async () => {
  const allEvents = await getAllEvents();

  return (
    <Page>
      <Page.Header lead="Discover where I'm making an impact in the tech community through my speaking and teaching engagements.">
        Appearances.
      </Page.Header>
      <AppearancesFeed events={allEvents} />
    </Page>
  );
};

export default AppearancesPage;
