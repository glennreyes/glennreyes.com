import type { ReactNode } from 'react';

interface PostsProps {
  children: ReactNode;
  title: string;
}

export function Posts({ children, title }: PostsProps) {
  return (
    <section>
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-6xl">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
