import type { Metadata } from 'next';

import { Suspense } from 'react';

import { FeedLoading } from '@/components/ui/layout/feed-loading';
import { Page } from '@/components/ui/layout/page';
import { WorkshopsFeed } from '@/components/workshops/workshops-feed';
import { getAllWorkshops } from '@/lib/workshops';

export const metadata: Metadata = {
  title: 'Workshops',
};

async function WorkshopsList() {
  const allWorkshops = await getAllWorkshops();

  return <WorkshopsFeed workshops={allWorkshops} />;
}

function WorkshopsPage() {
  return (
    <Page>
      <Page.Header lead="Explore my portfolio of successful web development workshops that have empowered hundreds of engineers.">
        Teaching.
      </Page.Header>
      <Suspense fallback={<FeedLoading />}>
        <WorkshopsList />
      </Suspense>
    </Page>
  );
}

export default WorkshopsPage;
