import type { Metadata } from 'next';
import { PostsFeed } from '~/components/posts/PostsFeed';
import { Container } from '~/components/ui/layout/Container';
import { H1 } from '~/components/ui/typography/H1';
import { Lead } from '~/components/ui/typography/Lead';
import { composeTitle } from '~/lib/metadata';

export const metadata: Metadata = {
  title: composeTitle('Posts'),
};

export default function PostsPage() {
  return (
    <Container>
      <Container.Header>
        <H1>Writing on code and life.</H1>
        <Lead>All my thoughts on code and life collected in a longer written form.</Lead>
      </Container.Header>
      <PostsFeed />
    </Container>
  );
}
