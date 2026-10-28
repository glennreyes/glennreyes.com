export function FeedLoading({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div className="grid gap-3" key={index}>
          <div className="h-6 w-3/4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
          <div className="h-4 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
        </div>
      ))}
    </div>
  );
}
