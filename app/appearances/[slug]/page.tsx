import { CalendarDaysIcon, ClockIcon, PresentationChartLineIcon, TvIcon } from '@heroicons/react/20/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { AppearanceLength } from '@prisma/client';
import { formatISO, isSameDay } from 'date-fns';
import type { Metadata } from 'next';
import { Badge } from '~/components/ui/elements/Badge';
import { DateDisplay } from '~/components/ui/elements/DateDisplay';
import { Divider } from '~/components/ui/elements/Divider';
import { Link } from '~/components/ui/elements/Link';
import { YouTube } from '~/components/ui/elements/YouTube';
import { Card } from '~/components/ui/layout/Card';
import { Page } from '~/components/ui/layout/Page';
import { H3 } from '~/components/ui/typography/H3';
import { getAllEvents, getEventBySlug } from '~/lib/events';
import { composeTitle } from '~/lib/metadata';
import { composePlaceByLocation } from '~/lib/place';

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
  const isOneDay = isSameDay(event.startDate, event.endDate);

  return (
    <Page>
      <Page.Header
        lead={
          <span className="inline-flex items-center gap-2">
            <MapPinIcon className="h-6 w-6 text-stone-300" />
            <span>
              {event.location.name} · {composePlaceByLocation(event.location)}
            </span>
          </span>
        }
        meta={
          <>
            <DateDisplay format={isOneDay ? 'MMMM dd, yyyy' : undefined} value={event.startDate} />
            {!isOneDay && (
              <>
                {' '}
                - <DateDisplay format="MMMM dd, yyyy" value={event.endDate} />
              </>
            )}
          </>
        }
      >
        {event.name} {event.startDate.getFullYear()}
      </Page.Header>
      <div className="grid gap-8">
        {event.appearances.map((appearance) => {
          const title = appearance.talk?.title ?? appearance.workshop?.title;
          const abstract = appearance.talk?.abstract ?? appearance.workshop?.abstract;
          const type = appearance.talk ? 'Talk' : appearance.workshop ? 'Workshop' : undefined;
          const dateTime = formatISO(appearance.date);
          const tags = appearance.talk?.tags;
          const lengths: Record<NonNullable<typeof type>, Record<AppearanceLength, string>> = {
            Talk: {
              [AppearanceLength.SHORT]: 'Lightning',
              [AppearanceLength.MEDIUM]: 'Regular',
              [AppearanceLength.LONG]: 'Extended',
            },
            Workshop: {
              [AppearanceLength.SHORT]: '2-3 Hours',
              [AppearanceLength.MEDIUM]: 'Half Day',
              [AppearanceLength.LONG]: 'Full Day',
            },
          };
          const slides = appearance.talk?.slides ?? appearance.workshop?.slides;
          const isYouTube = appearance.recording?.startsWith('https://youtu.be/');

          return (
            <Card key={appearance.slug}>
              <Card.Body title={type}>
                <div className="grid gap-6">
                  <div className="grid gap-8 md:grid-cols-3">
                    {(title || abstract) && (
                      <div className="grid gap-4 md:col-span-2">
                        {title && <H3>{title}</H3>}
                        {abstract && <p className="text-stone-500">{abstract}</p>}
                      </div>
                    )}
                    <div className="grid gap-4 md:col-span-1">
                      <dl className="grid content-start gap-4">
                        <div className="flex gap-2">
                          <dt className="flex-none">
                            <span className="sr-only">Date & Time</span>
                            <CalendarDaysIcon aria-hidden className="h-5 w-5 text-stone-300" />
                          </dt>
                          <dd className="text-sm font-medium text-stone-500">
                            <DateDisplay dateTime={dateTime} format="MMMM dd, yyyy 'at' p" value={appearance.date} />
                          </dd>
                        </div>
                        {type && (
                          <div className="flex gap-2">
                            <dt className="flex-none">
                              <span className="sr-only">Length</span>
                              <ClockIcon aria-hidden className="h-5 w-5 text-stone-300" />
                            </dt>
                            <dd className="text-sm font-medium text-stone-500">
                              {lengths[type][appearance.length]} {type}
                            </dd>
                          </div>
                        )}
                        {slides && (
                          <div className="flex gap-2">
                            <dt className="flex-none">
                              <span className="sr-only">Slides</span>
                              <PresentationChartLineIcon aria-hidden className="h-5 w-5 text-stone-300" />
                            </dt>
                            <dd className="text-sm font-medium text-stone-500">
                              <Link className="text-stone-900 underline" href={slides}>
                                View Slides
                              </Link>
                            </dd>
                          </div>
                        )}
                        {appearance.recording && (
                          <div className="flex gap-2">
                            <dt className="flex-none">
                              <span className="sr-only">Slides</span>
                              <TvIcon aria-hidden className="h-5 w-5 text-stone-300" />
                            </dt>
                            <dd className="text-sm font-medium text-stone-500">
                              <Link className="text-stone-900 underline" href={appearance.recording}>
                                Watch Recording
                              </Link>
                            </dd>
                          </div>
                        )}
                        {tags && (
                          <div>
                            <dt className="sr-only">Tags</dt>
                            <dd className="flex flex-wrap gap-2">
                              {tags.map((tag, index) => (
                                <Badge key={index}>{tag}</Badge>
                              ))}
                            </dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  </div>
                  <Divider />
                  {appearance.recording && title && isYouTube && <YouTube title={title} url={appearance.recording} />}
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Page>
  );
}
