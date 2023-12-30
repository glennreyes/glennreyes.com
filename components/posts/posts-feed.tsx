import { allPosts } from '@/lib/posts';

import { Feed } from '../ui/layout/feed';

export function PostsFeed() {
  return (
    <Feed>
      {allPosts.map(({ description, publishedAt, slug, title }) => (
        <Feed.Item
          action="Read Article"
          date={publishedAt}
          description={description}
          key={slug}
          link={`/posts/${slug}`}
          title={title}
        />
      ))}
    </Feed>
  );
}
