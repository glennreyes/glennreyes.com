import type { IsoDateTimeString } from 'contentlayer/generated';
import { format, formatISODuration } from 'date-fns';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';

interface ArticleHeaderProps extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead?: string;
  publishedAt: IsoDateTimeString;
  readingTime: ReadTimeResults;
}

export function ArticleHeader({ children, lead, publishedAt, readingTime, ...props }: ArticleHeaderProps) {
  const publishedDate = new Date(publishedAt);
  const published = format(publishedDate, 'MMMM dd, yyyy');
  const publishedValue = format(publishedDate, 'yyyy-MM-dd');
  const readingTimeValue = formatISODuration({ minutes: readingTime.minutes });

  return (
    <header
      className="prose prose-lg prose-slate mx-auto grid max-w-5xl gap-3 px-4 text-center prose-headings:m-0 prose-headings:tracking-tight"
      {...props}
    >
      <div className="text-gray-400">
        <time dateTime={publishedValue}>{published}</time> · <time dateTime={readingTimeValue}>{readingTime.text}</time>
      </div>
      <h1>{children}</h1>
      {lead ? <p className="text-stone-500">{lead}</p> : null}
    </header>
  );
}
