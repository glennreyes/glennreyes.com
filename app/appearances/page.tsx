import type { Metadata } from 'next';
import { AppearancesFeed } from '~/components/appearances/AppearancesFeed';
import { Page } from '~/components/ui/layout/Page';
import { getAllEvents } from '~/lib/events';
import { composeTitle } from '~/lib/metadata';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: composeTitle('Appearances'),
};

export default async function AppearancesPage() {
  const allEvents = await getAllEvents();

  return (
    <Page>
      <Page.Header lead="One way of my favorite ways to share knowledge is by speaking and teaching at tech events.">
        Where I'm speaking and teaching.
      </Page.Header>
      <Page.Body>
        {/* @ts-expect-error Server Components */}
        <AppearancesFeed events={allEvents} />
      </Page.Body>
    </Page>
  );
}
