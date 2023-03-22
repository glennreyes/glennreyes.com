import type { IsoDateTimeString } from 'contentlayer/generated';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';
import { DateDisplay } from '../elements/DateDisplay';
import { ReadingTime } from '../elements/ReadingTime';
import { H1 } from '../typography/H1';
import { Lead } from '../typography/Lead';

type ArticleProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

export function Article(props: ArticleProps) {
  return <article className="space-y-12 px-4" {...props} />;
}

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

Article.Header = ArticleHeader;

type ArticleBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

function ArticleBody(props: ArticleBodyProps) {
  return <div className="prose prose-stone mx-auto prose-h1:tracking-tight prose-pre:rounded-2xl" {...props} />;
}

Article.Body = ArticleBody;
