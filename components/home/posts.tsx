import { allPosts } from '@/lib/posts';

import { Feed } from '../ui/layout/feed';
import { ActionLink } from '../ui/link/action-link';
import { H4 } from '../ui/typography/h4';

export function Posts() {
  const posts = allPosts.slice(0, 4);

  return (
    <div className="grid gap-6 lg:gap-12">
      <H4 asChild>
        <h2>Recent Posts</h2>
      </H4>
      <div className="grid gap-12">
        <Feed>
          {posts.map(({ description, publishedAt, slug, title }) => (
            <Feed.Item
              date={publishedAt}
              description={description}
              key={slug}
              link={`/posts/${slug}`}
              title={title}
            />
          ))}
        </Feed>
        <ActionLink href="/posts">All Posts</ActionLink>
      </div>
    </div>
  );
}
