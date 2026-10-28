import type { Metadata } from 'next';

import { Suspense } from 'react';

import { TalksFeed } from '@/components/talks/talks-feed';
import { FeedLoading } from '@/components/ui/layout/feed-loading';
import { Page } from '@/components/ui/layout/page';
import { getAllTalks } from '@/lib/talks';

export const metadata: Metadata = {
  title: 'Talks',
};

async function TalksList() {
  const allTalks = await getAllTalks();

  return <TalksFeed talks={allTalks} />;
}

function TalksPage() {
  return (
    <Page>
      <Page.Header lead="Browse through a collection of my past and upcoming conference and meetup talks.">
        Speaking.
      </Page.Header>
      <Suspense fallback={<FeedLoading />}>
        <TalksList />
      </Suspense>
    </Page>
  );
}

export default TalksPage;
