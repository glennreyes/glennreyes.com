import type { ComponentPropsWithoutRef } from 'react';

type ArticleBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

export function ArticleBody(props: ArticleBodyProps) {
  return (
    <div
      className="prose prose-lg prose-slate mx-auto px-4 prose-headings:tracking-tight prose-pre:rounded-2xl"
      {...props}
    />
  );
}
