import type { Metadata } from 'next';
import { PostsFeed } from '~/components/posts/PostsFeed';
import { H1 } from '~/components/ui/text/H1';
import { composeTitle } from '~/utils/metadata';

export const metadata: Metadata = {
  title: composeTitle('Posts'),
};

export default function PostsPage() {
  return (
    <>
      <H1>Posts</H1>
      <PostsFeed />
    </>
  );
}
