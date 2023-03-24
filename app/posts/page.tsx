import type { Metadata } from 'next';
import { PostsFeed } from '~/components/posts/PostsFeed';
import { Page } from '~/components/ui/layout/Page';
import { composeTitle } from '~/lib/metadata';

export const metadata: Metadata = {
  title: composeTitle('Posts'),
};

export default function PostsPage() {
  return (
    <Page>
      <Page.Header lead="All my thoughts on code and life collected in a longer written form.">
        Writing on code and life.
      </Page.Header>
      <PostsFeed />
    </Page>
  );
}
