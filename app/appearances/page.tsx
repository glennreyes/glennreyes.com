import type { Metadata } from 'next';
import { AppearancesFeed } from '~/components/appearances/AppearancesFeed';
import { Container } from '~/components/ui/layout/Container';
import { H1 } from '~/components/ui/typography/H1';
import { Lead } from '~/components/ui/typography/Lead';
import { composeTitle } from '~/lib/metadata';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: composeTitle('Appearances'),
};

export default function AppearancesPage() {
  return (
    <Container>
      <Container.Header>
        <H1>Where I'll be sharing knowledge.</H1>
        <Lead>One way of my favorite ways to share knowledge is by speaking and teaching at tech events.</Lead>
      </Container.Header>
      {/* @ts-expect-error Server Components */}
      <AppearancesFeed />
    </Container>
  );
}