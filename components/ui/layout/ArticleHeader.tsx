import type { IsoDateTimeString } from 'contentlayer/generated';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';
import { PublishedAt } from '~/components/ui/elements/PublishedAt';
import { ReadingTime } from '~/components/ui/elements/ReadingTime';
import { Lead } from '~/components/ui/typography/Lead';

interface ArticleHeaderProps extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead: string | undefined;
  publishedAt: IsoDateTimeString | undefined;
  readingTime: ReadTimeResults;
}

export function ArticleHeader({ children, lead, publishedAt, readingTime, ...props }: ArticleHeaderProps) {
  return (
    <header
      className="prose prose-zinc mx-auto prose-headings:m-0 prose-headings:tracking-tight prose-h1:text-4xl sm:prose-h1:text-5xl"
      {...props}
    >
      <p className="text-stone-400">
        <PublishedAt value={publishedAt} /> · <ReadingTime value={readingTime} />
      </p>
      <h1>{children}</h1>
      {lead && <Lead>{lead}</Lead>}
    </header>
  );
}
