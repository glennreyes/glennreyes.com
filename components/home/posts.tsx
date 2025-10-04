import { unstable_noStore as noStore } from 'next/cache';

import { getAllPublishedPosts } from '@/lib/posts';

import { Feed } from '../ui/layout/feed';
import { ActionLink } from '../ui/link/action-link';
import { H4 } from '../ui/typography/h4';

export const Posts = async () => {
  noStore();
  const allPosts = await getAllPublishedPosts();
  const posts = allPosts.slice(0, 4);

  return (
    <div className="grid gap-6 lg:gap-12">
      <H4 asChild>
        <h2>Recent Posts</h2>
      </H4>
      <div className="grid gap-12">
        <Feed>
          {posts.map(({ frontmatter, slug }) => (
            <Feed.Item
              description={frontmatter.description}
              key={slug}
              link={`/posts/${slug}`}
              title={frontmatter.title}
              viewTransitionName={`post-${slug}`}
            />
          ))}
        </Feed>
        <ActionLink href="/posts">All Posts</ActionLink>
      </div>
    </div>
  );
};
