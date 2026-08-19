import type { Metadata } from 'next';

import { Suspense } from 'react';

import { PostsFeed } from '@/components/posts/posts-feed';
import { FeedLoading } from '@/components/ui/layout/feed-loading';
import { Page } from '@/components/ui/layout/page';

export const metadata: Metadata = {
  title: 'Posts',
};

const PostsPage = () => (
  <Page>
    <Page.Header lead="Where I share my insights on the intersection of code and life through thought-provoking written articles.">
      Writing on code and life.
    </Page.Header>
    <Page.Body>
      <Suspense fallback={<FeedLoading />}>
        <PostsFeed />
      </Suspense>
    </Page.Body>
  </Page>
);

export default PostsPage;
