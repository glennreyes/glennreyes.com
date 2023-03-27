import type { Metadata } from 'next';
<<<<<<< Updated upstream
import { AppearanceCard } from '~/components/appearances/AppearanceCard';
=======
import { EventAppearances } from '~/components/appearances/EventAppearances';
>>>>>>> Stashed changes
import { EventDate } from '~/components/appearances/EventDate';
import { EventLocation } from '~/components/appearances/EventLocation';
import { Page } from '~/components/ui/layout/Page';
import { getAllEvents, getEventBySlug } from '~/lib/events';
import { composeTitle } from '~/lib/metadata';

export const revalidate = 3600;

interface GenerateMetadataConfigParams {
  slug: string;
}

interface GenerateMetadataConfig {
  params: GenerateMetadataConfigParams;
}

export async function generateMetadata({ params }: GenerateMetadataConfig): Promise<Metadata> {
  const event = await getEventBySlug(params.slug);

  return {
    title: composeTitle(event.name),
  };
}

export async function generateStaticParams() {
  const allEvents = await getAllEvents();

  return allEvents.map((event) => ({ slug: event.slug }));
}

interface AppearancePageParams {
  slug: string;
}

interface AppearancePageProps {
  params: AppearancePageParams;
}

export default async function AppearancePage({ params }: AppearancePageProps) {
  const event = await getEventBySlug(params.slug);

  return (
    <Page>
      <Page.Header
        lead={<EventLocation location={event.location} />}
        meta={<EventDate endDate={event.endDate} startDate={event.startDate} />}
      >
        {event.name} {event.startDate.getFullYear()}
      </Page.Header>
<<<<<<< Updated upstream
      <div className="grid gap-8">
        {event.appearances.map(({ date, length, recording, slug, talk, workshop }) => (
          <AppearanceCard
=======
      <EventAppearances>
        {event.appearances.map(({ date, length, recording, slug, talk, workshop }) => (
          <EventAppearances.Card
>>>>>>> Stashed changes
            date={date}
            key={slug}
            length={length}
            recording={recording ?? undefined}
            talk={talk ?? undefined}
            workshop={workshop ?? undefined}
          />
        ))}
<<<<<<< Updated upstream
      </div>
=======
      </EventAppearances>
>>>>>>> Stashed changes
    </Page>
  );
}
