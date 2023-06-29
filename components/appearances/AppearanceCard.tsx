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
import { DateDisplay } from '../ui/elements/DateDisplay';
import { Divider } from '../ui/elements/Divider';
import { TagCloud } from '../ui/elements/TagCloud';
import { YouTube } from '../ui/elements/YouTube';
import { Card } from '../ui/layout/Card';
import { InlineLink } from '../ui/link/InlineLink';
import { H3 } from '../ui/typography/H3';
import { Paragraph } from '../ui/typography/Paragraph';

interface AppearanceCardProps {
  abstract?: string;
  date: Date;
  length: AppearanceLength;
  recording?: string;
  talk?: Pick<Talk, 'abstract' | 'slides' | 'tags' | 'title'>;
  title?: string;
  workshop?: Pick<Workshop, 'description' | 'slides' | 'title'>;
}

export function AppearanceCard({ date, length, recording, talk, workshop }: AppearanceCardProps) {
  const title = talk?.title ?? workshop?.title;
  const description = talk?.abstract ?? workshop?.description;
  const type = talk ? 'Talk' : workshop ? 'Workshop' : undefined;
  const dateTime = formatISO(date);
  const tags = talk?.tags;
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
  const slides = talk?.slides ?? workshop?.slides;
  const isYouTube = recording?.startsWith('https://youtu.be/');

  return (
    <Card>
      <Card.Body title={type}>
        <div className="grid gap-6">
          <div className="grid gap-8 md:grid-cols-3">
            {(title || description) && (
              <div className="grid gap-4 md:col-span-2">
                {title && <H3>{title}</H3>}
                {description && <Paragraph>{description}</Paragraph>}
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
                        Watch Recording
                        <ArrowTopRightOnSquareIcon aria-hidden className="h-4 w-4" />
                      </InlineLink>
                    </Paragraph>
                  </div>
                )}
              </dl>
              {tags && <TagCloud tags={tags} />}
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
