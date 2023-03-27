import type { Metadata } from 'next';
import { TalksFeed } from '~/components/talks/TalksFeed';
import { Page } from '~/components/ui/layout/Page';
import { composeTitle } from '~/lib/metadata';

export const metadata: Metadata = {
  title: composeTitle('Posts'),
};

export default function PostsPage() {
  return (
    <Page>
      <Page.Header lead="All talks that I gave at conferences and meetups.">Talks.</Page.Header>
      <Page.Body>
        {/* @ts-expect-error Server Components */}
        <TalksFeed />
      </Page.Body>
    </Page>
  );
}
