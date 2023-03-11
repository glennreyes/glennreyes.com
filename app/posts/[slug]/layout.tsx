import type { ReactNode } from 'react';

interface PostLayoutProps {
  children: ReactNode;
}

export default function PostLayout(props: PostLayoutProps) {
  return <div className="prose prose-slate mx-auto max-w-prose md:prose-xl lg:prose-2xl" {...props} />;
}
