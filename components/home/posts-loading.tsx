import { Feed } from '../ui/layout/feed';
import { H4 } from '../ui/typography/h4';

export function PostsLoading() {
  return (
    <div className="grid gap-6 lg:gap-12">
      <H4 asChild>
        <h2>Recent Posts</h2>
      </H4>
      <div className="grid gap-12">
        <Feed>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="grid gap-3" key={index}>
              <div className="h-6 w-3/4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
              <div className="h-4 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
            </div>
          ))}
        </Feed>
        <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      </div>
    </div>
  );
}
