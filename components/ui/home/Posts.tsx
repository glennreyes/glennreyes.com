import type { ReactNode } from 'react';

interface PostsProps {
  children: ReactNode;
  title: string;
}

export function Posts({ children, title }: PostsProps) {
  return (
    <section className="grid gap-4">
      <h2 className="px-4 text-xl tracking-tight">{title}</h2>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}
