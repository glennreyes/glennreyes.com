import type { Metadata } from 'next';
import { DateDisplay } from '~/components/ui/elements/DateDisplay';
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
  const place = [event.location.city, event.location.state ?? event.location.country].join(', ');

  return (
    <Page>
      <Page.Header
        meta={
          <>
            <DateDisplay value={event.startDate} /> · {event.location.name} · {place}
          </>
        }
      >
        {event.name}
      </Page.Header>
      <Page.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos ab beatae quos magnam rem quaerat voluptate
        eligendi, reprehenderit maiores aspernatur maxime ipsa impedit alias debitis sit quidem modi optio!
      </Page.Body>
    </Page>
  );
}
