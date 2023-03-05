interface PostsProps {
  title: string;
}

export function Posts({ title }: PostsProps) {
  return (
    <section>
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-6xl">{title}</h2>
    </section>
  );
}
