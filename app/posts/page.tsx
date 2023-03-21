import type { Metadata } from 'next';
import { PostsFeed } from '~/components/posts/PostsFeed';
import { Container } from '~/components/ui/layout/Container';
import { H1 } from '~/components/ui/typography/H1';
import { Lead } from '~/components/ui/typography/Lead';
import { composeTitle } from '~/utils/metadata';

export const metadata: Metadata = {
  title: composeTitle('Posts'),
};

export default function PostsPage() {
  return (
    <Container width="narrow">
      <header className="grid gap-4">
        <H1>Writing on code and life.</H1>
        <Lead>All my thoughts on code and life collected in a longer written form.</Lead>
      </header>
      <PostsFeed />
    </Container>
  );
}
