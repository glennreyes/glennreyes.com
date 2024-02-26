import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { WorkshopsFeed } from '@/components/workshops/workshops-feed';
import { getAllWorkshops } from '@/lib/workshops';

export const metadata: Metadata = {
  title: 'Workshops',
};

const WorkshopsPage = async () => {
  const allWorkshops = await getAllWorkshops();

  return (
    <Page>
      <Page.Header lead="Explore my portfolio of successful web development workshops that have empowered hundreds of engineers.">
        Teaching.
      </Page.Header>
      <WorkshopsFeed workshops={allWorkshops} />
    </Page>
  );
};

export default WorkshopsPage;
