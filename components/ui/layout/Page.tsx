import type { IsoDateTimeString } from 'contentlayer/generated';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReadTimeResults } from 'reading-time';
import { DateDisplay } from '../elements/DateDisplay';
import { ReadingTime } from '../elements/ReadingTime';
import { H1 } from '../typography/H1';
import { Lead } from '../typography/Lead';

type PageProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function Page(props: PageProps) {
  return <div className="container mx-auto space-y-12 px-4" {...props} />;
}

interface PageHeaderProps extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead: string | undefined;
  publishedAt?: IsoDateTimeString | undefined;
  readingTime?: ReadTimeResults;
}

export function PageHeader({ children, lead, publishedAt, readingTime, ...props }: PageHeaderProps) {
  return (
    <header className="grid max-w-[70ch] gap-4" {...props}>
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

Page.Header = PageHeader;

type PageBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

function PageBody(props: PageBodyProps) {
  return <div className="prose prose-stone prose-h1:tracking-tight prose-pre:rounded-[1.75rem]" {...props} />;
}

Page.Body = PageBody;
