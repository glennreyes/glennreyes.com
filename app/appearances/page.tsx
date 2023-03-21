import type { Metadata } from 'next';
import { AppearancesFeed } from '~/components/appearances/AppearancesFeed';
import { Container } from '~/components/ui/layout/Container';
import { H1 } from '~/components/ui/typography/H1';
import { Lead } from '~/components/ui/typography/Lead';
import { composeTitle } from '~/utils/metadata';

export const metadata: Metadata = {
  title: composeTitle('Appearances'),
};

export default function AppearancesPage() {
  return (
    <Container>
      <header className="grid gap-4">
        <H1>Where I'll be sharing knowledge.</H1>
        <Lead>One way of my favorite ways to share knowledge is by speaking and teaching at tech events.</Lead>
      </header>
      <AppearancesFeed />
    </Container>
  );
}
