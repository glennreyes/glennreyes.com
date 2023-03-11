import type { ComponentPropsWithoutRef } from 'react';

type PostLayoutProps = ComponentPropsWithoutRef<'div'>;

export default function PostLayout(props: PostLayoutProps) {
  return <div className="prose prose-slate mx-auto max-w-prose md:prose-xl lg:prose-2xl" {...props} />;
}
