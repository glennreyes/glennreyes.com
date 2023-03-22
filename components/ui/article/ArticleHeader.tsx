import type { IsoDateTimeString } from 'contentlayer/generated';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';
import { DateDisplay } from '../elements/DateDisplay';
import { ReadingTime } from '../elements/ReadingTime';
import { H1 } from '../typography/H1';
import { Lead } from '../typography/Lead';

interface ArticleHeaderProps extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead: string | undefined;
  publishedAt?: IsoDateTimeString | undefined;
  readingTime?: ReadTimeResults;
}

export function ArticleHeader({ children, lead, publishedAt, readingTime, ...props }: ArticleHeaderProps) {
  return (
    <header className="mx-auto grid max-w-[70ch] gap-4" {...props}>
      {readingTime && (
        <p className="text-stone-400">
          <DateDisplay value={publishedAt} /> · <ReadingTime value={readingTime} />
        </p>
      )}
      <H1>{children}</H1>
      {lead && <Lead>{lead}</Lead>}
    </header>
  );
}
