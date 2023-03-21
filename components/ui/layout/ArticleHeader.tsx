import type { IsoDateTimeString } from 'contentlayer/generated';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';
import { PublishedAt } from '../elements/PublishedAt';
import { ReadingTime } from '../elements/ReadingTime';

interface ArticleHeaderProps extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead: string | undefined;
  publishedAt: IsoDateTimeString | undefined;
  readingTime: ReadTimeResults;
}

export function ArticleHeader({ children, lead, publishedAt, readingTime, ...props }: ArticleHeaderProps) {
  return (
    <header
      className="prose prose-lg prose-slate mx-auto grid max-w-5xl gap-3 px-4 text-center prose-headings:m-0 prose-headings:tracking-tight prose-lead:m-0"
      {...props}
    >
      <div className="text-stone-400">
        <PublishedAt value={publishedAt} /> · <ReadingTime value={readingTime} />
      </div>
      <h1>{children}</h1>
      {lead && <p className="font-medium text-stone-500">{lead}</p>}
    </header>
  );
}
