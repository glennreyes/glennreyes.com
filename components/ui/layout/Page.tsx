import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { H1 } from '../typography/H1';
import { Lead } from '../typography/Lead';

type PageProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function Page(props: PageProps) {
  return <div className="container mx-auto space-y-12 px-4" {...props} />;
}

interface PageHeaderProps extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead?: ReactNode;
  meta?: ReactNode;
}

export function PageHeader({ children, lead, meta, ...props }: PageHeaderProps) {
  return (
    <header className="grid max-w-4xl gap-4" {...props}>
      {meta !== null && meta !== undefined && <div className="text-stone-400">{meta}</div>}
      <H1>{children}</H1>
      {lead !== null && lead !== undefined && (typeof lead === 'string' ? <Lead>{lead}</Lead> : lead)}
    </header>
  );
}

Page.Header = PageHeader;

type PageBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

function PageBody(props: PageBodyProps) {
  return <article className="prose prose-stone" {...props} />;
}

Page.Body = PageBody;
