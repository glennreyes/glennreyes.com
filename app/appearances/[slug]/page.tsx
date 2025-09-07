import type { Metadata } from 'next';
import type { FC } from 'react';

import { EventAppearances } from '@/components/appearances/event-appearances';
import { EventDate } from '@/components/appearances/event-date';
import { EventLead } from '@/components/appearances/event-lead';
import { Page } from '@/components/ui/layout/page';
import { getAllEvents, getEventBySlug } from '@/lib/events';

export const revalidate = 3600;

export const generateMetadata = async (
  props: PageProps<'/appearances/[slug]'>,
): Promise<Metadata> => {
  const params = await props.params;
  const event = await getEventBySlug(params.slug);

  return {
    title: event.name,
  };
};

export const generateStaticParams = async () => {
  const allEvents = await getAllEvents();

  return allEvents.map((event) => ({ slug: event.slug }));
};

const AppearancePage: FC<PageProps<'/appearances/[slug]'>> = async (props) => {
  const params = await props.params;
  const event = await getEventBySlug(params.slug);

  return (
    <Page>
      <Page.Header
        lead={<EventLead location={event.location} url={event.url} />}
        meta={<EventDate endDate={event.endDate} startDate={event.startDate} />}
      >
        {event.name} {event.startDate.getFullYear()}
      </Page.Header>
      <EventAppearances>
        {event.appearances.map(
          ({ date, length, recording, slug, talk, workshop }) => (
            <EventAppearances.Card
              date={date}
              key={slug}
              length={length}
              recording={recording ?? undefined}
              talk={talk ?? undefined}
              workshop={workshop ?? undefined}
            />
          ),
        )}
      </EventAppearances>
    </Page>
  );
};

export default AppearancePage;
