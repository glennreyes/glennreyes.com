import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { SpeakingFeed } from '@/components/speaking/speaking-feed';
import { getAllWorkshops } from '@/lib/workshops';

export const metadata: Metadata = {
  title: 'Workshops',
};

export default async function WorkshopsPage() {
  const allWorkshops = await getAllWorkshops();

  return (
    <Page>
      <Page.Header lead="Explore my portfolio of successful web development workshops that have empowered hundreds of engineers.">
        Teaching.
      </Page.Header>
      <SpeakingFeed kind="Workshops" sessions={allWorkshops} />
    </Page>
  );
}
