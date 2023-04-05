import {
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  ClockIcon,
  PresentationChartLineIcon,
  TvIcon,
} from '@heroicons/react/20/solid';
import { AppearanceLength } from '@prisma/client';
import type { Talk, Workshop } from '@prisma/client';
import { formatISO } from 'date-fns';
import type { ComponentPropsWithoutRef } from 'react';
import { Badge } from '../ui/elements/Badge';
import { DateDisplay } from '../ui/elements/DateDisplay';
import { Divider } from '../ui/elements/Divider';
import { YouTube } from '../ui/elements/YouTube';
import { Card } from '../ui/layout/Card';
import { ActionLink } from '../ui/link/ActionLink';
import { InlineLink } from '../ui/link/InlineLink';
import { H2 } from '../ui/typography/H2';
import { Paragraph } from '../ui/typography/Paragraph';

const lengths: Record<'Talk' | 'Workshop', Record<AppearanceLength, string>> = {
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

type EventAppearancesProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function EventAppearances(props: EventAppearancesProps) {
  return <section className="grid gap-12 md:gap-16" {...props} />;
}

interface EventAppearancesCardProps {
  date: Date;
  length: AppearanceLength;
  recording?: string;
  talk?: Pick<Talk, 'abstract' | 'slides' | 'slug' | 'tags' | 'title'>;
  title?: string;
  workshop?: Pick<Workshop, 'slides' | 'slug' | 'summary' | 'title'>;
}

function EventAppearancesCard({ date, length, recording, talk, workshop }: EventAppearancesCardProps) {
  const path = talk?.slug ? `/talks/${talk.slug}` : workshop?.slug ? `/workshops/${workshop.slug}` : undefined;
  const title = talk?.title ?? workshop?.title;
  const summary = talk?.abstract ?? workshop?.summary;
  const type = talk ? 'Talk' : workshop ? 'Workshop' : undefined;
  const dateTime = formatISO(date);
  const tags = talk?.tags;
  const slides = talk?.slides ?? workshop?.slides;
  const isYouTube = recording?.startsWith('https://youtu.be/');

  return (
    <Card as="article">
      <Card.Body title={type}>
        <div className="grid gap-6">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
            {(title || summary) && path && (
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
                    <CalendarDaysIcon aria-hidden className="h-5 w-5 text-slate-300 dark:text-slate-700" />
                  </dt>
                  <Paragraph as="dd" className="text-sm font-medium">
                    <DateDisplay dateTime={dateTime} format="MMMM dd, yyyy 'at' p" value={date} />
                  </Paragraph>
                </div>
                {type && (
                  <div className="flex gap-2">
                    <dt className="flex-none">
                      <span className="sr-only">Length</span>
                      <ClockIcon aria-hidden className="h-5 w-5 text-slate-300 dark:text-slate-700" />
                    </dt>
                    <Paragraph as="dd" className="text-sm font-medium">
                      {lengths[type][length]} {type}
                    </Paragraph>
                  </div>
                )}
                {slides && (
                  <div className="flex gap-2">
                    <dt className="flex-none">
                      <span className="sr-only">Slides</span>
                      <PresentationChartLineIcon aria-hidden className="h-5 w-5 text-slate-300 dark:text-slate-700" />
                    </dt>
                    <Paragraph as="dd" className="text-sm font-medium">
                      <InlineLink className="inline-flex items-center gap-1" href={slides}>
                        View Slides
                        <ArrowTopRightOnSquareIcon aria-hidden className="h-4 w-4" />
                      </InlineLink>
                    </Paragraph>
                  </div>
                )}
                {recording && (
                  <div className="flex gap-2">
                    <dt className="flex-none">
                      <span className="sr-only">Slides</span>
                      <TvIcon aria-hidden className="h-5 w-5 text-slate-300 dark:text-slate-700" />
                    </dt>
                    <Paragraph as="dd" className="text-sm font-medium">
                      <InlineLink className="inline-flex items-center gap-1" href={recording}>
                        <ArrowTopRightOnSquareIcon aria-hidden className="h-4 w-4" />
                        Watch Recording
                      </InlineLink>
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
    </Card>
  );
}

EventAppearances.Card = EventAppearancesCard;
