export function PostsLoading() {
  return (
    <output aria-label="Loading posts" className="grid gap-2">
      {[0, 1].map((index) => (
        <div className="flex min-h-11 items-center" key={index}>
          <div className="bg-muted h-5 w-64 max-w-full animate-pulse rounded-md motion-reduce:animate-none" />
        </div>
      ))}
    </output>
  );
}
