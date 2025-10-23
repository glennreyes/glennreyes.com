import type { ComponentPropsWithoutRef } from 'react';

import { formatISO } from 'date-fns';
import { Calendar, Clock, ExternalLink, Presentation, Tv } from 'lucide-react';

import type { AppearanceLengthType, Talk, Workshop } from '@/drizzle/schema';

import { Badge } from '../ui/elements/badge';
import { DateDisplay } from '../ui/elements/date-display';
import { Divider } from '../ui/elements/divider';
import { YouTube } from '../ui/elements/youtube';
import { Card } from '../ui/layout/card';
import { ActionLink } from '../ui/link/action-link';
import { InlineLink } from '../ui/link/inline-link';
import { H2 } from '../ui/typography/h2';
import { Paragraph } from '../ui/typography/paragraph';

const lengths = {
  Talk: {
    SHORT: 'Lightning',
    MEDIUM: 'Regular',
    LONG: 'Extended',
  },
  Workshop: {
    SHORT: '2-3 Hours',
    MEDIUM: 'Half Day',
    LONG: 'Full Day',
  },
} as const;

type EventAppearancesProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

function EventAppearances(props: EventAppearancesProps) {
  return <section className="grid gap-12 md:gap-16" {...props} />;
}

interface EventAppearancesCardProps {
  date: Date;
  length: AppearanceLengthType;
  recording?: string;
  talk?: Pick<Talk, 'abstract' | 'slides' | 'slug' | 'tags' | 'title'>;
  title?: string;
  workshop?: Pick<Workshop, 'slides' | 'slug' | 'summary' | 'title'>;
}

function EventAppearancesCard({
  date,
  length,
  recording,
  talk,
  workshop,
}: EventAppearancesCardProps) {
  const path = talk?.slug
    ? `/talks/${talk.slug}`
    : workshop?.slug
      ? `/workshops/${workshop.slug}`
      : undefined;
  const title = talk?.title ?? workshop?.title;
  const summary = talk?.abstract ?? workshop?.summary;
  const type = talk ? 'Talk' : workshop ? 'Workshop' : undefined;
  const dateTime = formatISO(date);
  const tags = talk?.tags;
  const slides = talk?.slides ?? workshop?.slides;
  const isYouTube = recording?.startsWith('https://youtu.be/');

  return (
    <Card>
      <article>
        <Card.Body title={type}>
          <div className="grid gap-6">
            <div className="grid gap-8 gap-y-16 md:grid-cols-3">
              {(title ?? summary) && path && (
                <div className="grid gap-12 md:col-span-2">
                  <div className="grid gap-8">
                    {title && <H2>{title}</H2>}
                    {summary && <Paragraph>{summary}</Paragraph>}
                  </div>
                  <ActionLink href={path}>View Details</ActionLink>
                </div>
              )}
              <div className="grid gap-4 md:col-span-1">
                <dl className="grid content-start gap-4">
                  <div className="flex gap-2">
                    <dt className="flex-none">
                      <span className="sr-only">Date & Time</span>
                      <Calendar
                        aria-hidden
                        className="h-5 w-5 text-slate-300 dark:text-slate-700"
                        strokeWidth={2}
                      />
                    </dt>
                    <Paragraph asChild className="font-medium">
                      <dd>
                        <DateDisplay
                          dateTime={dateTime}
                          format="MMMM dd, yyyy 'at' p"
                          value={date}
                        />
                      </dd>
                    </Paragraph>
                  </div>
                  {type && (
                    <div className="flex gap-2">
                      <dt className="flex-none">
                        <span className="sr-only">Length</span>
                        <Clock
                          aria-hidden
                          className="h-5 w-5 text-slate-300 dark:text-slate-700"
                          strokeWidth={2}
                        />
                      </dt>
                      <Paragraph asChild className="font-medium">
                        <dd>
                          {lengths[type][length]} {type}
                        </dd>
                      </Paragraph>
                    </div>
                  )}
                  {slides && (
                    <div className="flex gap-2">
                      <dt className="flex-none">
                        <span className="sr-only">Slides</span>
                        <Presentation
                          aria-hidden
                          className="h-5 w-5 text-slate-300 dark:text-slate-700"
                          strokeWidth={2}
                        />
                      </dt>
                      <Paragraph asChild className="font-medium">
                        <dd>
                          <InlineLink
                            className="inline-flex items-center gap-1"
                            href={slides}
                          >
                            View Slides
                            <ExternalLink
                              aria-hidden
                              className="h-4 w-4"
                              strokeWidth={2}
                            />
                          </InlineLink>
                        </dd>
                      </Paragraph>
                    </div>
                  )}
                  {recording && (
                    <div className="flex gap-2">
                      <dt className="flex-none">
                        <span className="sr-only">Slides</span>
                        <Tv
                          aria-hidden
                          className="h-5 w-5 text-slate-300 dark:text-slate-700"
                          strokeWidth={2}
                        />
                      </dt>
                      <Paragraph asChild className="font-medium">
                        <dd>
                          <InlineLink
                            className="inline-flex items-center gap-1"
                            href={recording}
                          >
                            Watch Recording
                            <ExternalLink
                              aria-hidden
                              className="h-4 w-4"
                              strokeWidth={2}
                            />
                          </InlineLink>
                        </dd>
                      </Paragraph>
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
            {recording && title && isYouTube && (
              <>
                <Divider />
                <YouTube title={title} url={recording} />
              </>
            )}
          </div>
        </Card.Body>
      </article>
    </Card>
  );
}

type EventAppearancesComponent = typeof EventAppearances & {
  Card: typeof EventAppearancesCard;
};

const EventAppearancesWithCard: EventAppearancesComponent = Object.assign(
  EventAppearances,
  {
    Card: EventAppearancesCard,
  },
);

export { EventAppearancesWithCard as EventAppearances };
