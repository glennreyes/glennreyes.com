import type { ComponentPropsWithoutRef } from 'react';

type ArticleBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

export function ArticleBody(props: ArticleBodyProps) {
  return (
    <div
      className="prose prose-lg prose-slate mx-auto prose-headings:font-semibold prose-headings:tracking-tight"
      {...props}
    />
  );
}
