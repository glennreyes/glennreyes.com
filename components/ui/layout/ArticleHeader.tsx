import type { IsoDateTimeString } from 'contentlayer/generated';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';
import { PublishedAt } from '~/components/ui/elements/PublishedAt';
import { ReadingTime } from '~/components/ui/elements/ReadingTime';
import { H1 } from '~/components/ui/typography/H1';
import { Lead } from '~/components/ui/typography/Lead';

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
          <PublishedAt value={publishedAt} /> · <ReadingTime value={readingTime} />
        </p>
      )}
      <H1>{children}</H1>
      {lead && <Lead>{lead}</Lead>}
    </header>
  );
}
