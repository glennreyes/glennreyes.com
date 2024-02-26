import type { Metadata } from 'next';

import { TalksFeed } from '@/components/talks/talks-feed';
import { Page } from '@/components/ui/layout/page';
import { getAllTalks } from '@/lib/talks';

export const metadata: Metadata = {
  title: 'Talks',
};

const TalksPage = async () => {
  const allTalks = await getAllTalks();

  return (
    <Page>
      <Page.Header lead="Browse through a collection of my past and upcoming conference and meetup talks.">
        Speaking.
      </Page.Header>
      <Page.Body>
        <TalksFeed talks={allTalks} />
      </Page.Body>
    </Page>
  );
};

export default TalksPage;
