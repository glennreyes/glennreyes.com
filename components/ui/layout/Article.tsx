import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { H1 } from '../typography/H1';
import { Lead } from '../typography/Lead';

type ArticleProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

export function Article(props: ArticleProps) {
  return <article className="container mx-auto space-y-12 px-4" {...props} />;
}

interface ArticleHeaderProps extends Omit<ComponentPropsWithoutRef<'header'>, 'className' | 'title'> {
  lead?: ReactNode;
  meta: ReactNode;
}

export function ArticleHeader({ children, lead, meta, ...props }: ArticleHeaderProps) {
  return (
    <header className="mx-auto grid max-w-[70ch] gap-4" {...props}>
      {meta !== null && meta !== undefined && <div className="text-stone-400">{meta}</div>}
      <H1>{children}</H1>
      {lead !== null && lead !== undefined && <Lead>{lead}</Lead>}
    </header>
  );
}

Article.Header = ArticleHeader;

type ArticleBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

function ArticleBody(props: ArticleBodyProps) {
  return <div className="prose prose-stone mx-auto prose-h1:tracking-tight prose-pre:rounded-[1.75rem]" {...props} />;
}

Article.Body = ArticleBody;
