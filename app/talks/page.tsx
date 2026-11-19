import type { Metadata } from 'next';

import { SpeakingFeed } from '@/components/speaking/speaking-feed';
import { Page } from '@/components/ui/layout/page';
import { getAllTalks } from '@/lib/talks';

export const metadata: Metadata = {
  title: 'Talks',
};

export default async function TalksPage() {
  const allTalks = await getAllTalks();

  return (
    <Page>
      <Page.Header lead="Browse through a collection of my past and upcoming conference and meetup talks.">
        Speaking.
      </Page.Header>
      <SpeakingFeed kind="Talks" sessions={allTalks} />
    </Page>
  );
}
