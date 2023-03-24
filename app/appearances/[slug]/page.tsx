import type { Metadata } from 'next';
import { DateDisplay } from '~/components/ui/elements/DateDisplay';
import { Card } from '~/components/ui/layout/Card';
import { Page } from '~/components/ui/layout/Page';
import { H3 } from '~/components/ui/typography/H3';
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
      <div>
        {event.appearances.map((appearance) => {
          const title = appearance.talk?.title ?? appearance.workshop?.title;
          const abstract = appearance.talk?.abstract ?? appearance.workshop?.abstract;
          const type = appearance.talk ? 'Talk' : appearance.workshop ? 'Workshop' : undefined;

          return (
            <Card key={appearance.slug}>
              <Card.Body
                title={
                  type && (
                    <div>
                      <span className="rounded-full border border-teal-300 bg-teal-50 py-1.5 px-2.5 text-[0.625rem] font-semibold text-teal-500">
                        {type}
                      </span>
                    </div>
                  )
                }
              >
                <div className="grid gap-8 lg:grid-cols-3">
                  {(title || abstract) && (
                    <div className="grid gap-4 lg:col-span-2">
                      {title && <H3>{title}</H3>}
                      {abstract && <p className="text-stone-500">{abstract}</p>}
                    </div>
                  )}
                  <div className="grid gap-4 lg:col-span-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse sit neque amet perspiciatis minus
                    tempore quam, provident qui ad at optio, nihil accusamus ipsa voluptatum culpa a fugiat quisquam.
                  </div>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Page>
  );
}
