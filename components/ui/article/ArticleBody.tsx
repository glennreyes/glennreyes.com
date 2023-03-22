import type { ComponentPropsWithoutRef } from 'react';

type ArticleBodyProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'>;

export function ArticleBody(props: ArticleBodyProps) {
  return <div className="prose prose-stone mx-auto prose-h1:tracking-tight prose-pre:rounded-2xl" {...props} />;
}
