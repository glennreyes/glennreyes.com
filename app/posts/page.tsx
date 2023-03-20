import type { Metadata } from 'next';
import { PostsFeed } from '~/components/posts/PostsFeed';
import { Container } from '~/components/ui/layout/Container';
import { H1 } from '~/components/ui/text/H1';
import { composeTitle } from '~/utils/metadata';

export const metadata: Metadata = {
  title: composeTitle('Posts'),
};

export default function PostsPage() {
  return (
    <Container width="narrow">
      <H1>Posts</H1>
      <PostsFeed />
    </Container>
  );
}
