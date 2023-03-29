import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { H1 } from '../typography/H1';
import { Lead } from '../typography/Lead';
import { Container } from './Container';

interface ArticleProps extends Omit<ComponentPropsWithoutRef<'article'>, 'className'> {
  back?: ReactNode;
}

export function Article({ back, children, ...props }: ArticleProps) {
  return (
    <Container as="article" className="space-y-6 lg:space-y-0" {...props}>
      {back !== undefined && back !== null ? (
        <>
          <div className="lg:sticky lg:top-20">
            <div className="mx-auto max-w-[70ch] lg:absolute">{back}</div>
          </div>
          <div className="space-y-12">{children}</div>
        </>
      ) : (
        children
      )}
    </Container>
  );
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
  return <div className="prose prose-stone mx-auto" {...props} />;
}

Article.Body = ArticleBody;
