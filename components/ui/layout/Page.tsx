import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { H1 } from '../typography/H1';
import { Lead } from '../typography/Lead';
import { Container } from './Container';

type PageProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function Page(props: PageProps) {
  return <Container className="space-y-12" {...props} />;
}

interface PageHeaderProps extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead?: ReactNode;
  meta?: ReactNode;
}

export function PageHeader({ children, lead, meta, ...props }: PageHeaderProps) {
  return (
    <header className="grid max-w-4xl gap-4" {...props}>
      {meta !== null && meta !== undefined && <div className="text-slate-400">{meta}</div>}
      <H1>{children}</H1>
      {lead !== null && lead !== undefined && (typeof lead === 'string' ? <Lead>{lead}</Lead> : lead)}
    </header>
  );
}

Page.Header = PageHeader;

type PageBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

function PageBody(props: PageBodyProps) {
  return <article className="prose prose-slate dark:prose-invert" {...props} />;
}

Page.Body = PageBody;
