import { getAllPosts } from '@/lib/posts';

import { Feed } from '../ui/layout/feed';
import { ActionLink } from '../ui/link/action-link';
import { H4 } from '../ui/typography/h4';

export async function Posts() {
  const allPosts = await getAllPosts();
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
              date={frontmatter.publishedAt}
              description={frontmatter.description}
              key={slug}
              link={`/posts/${slug}`}
              title={frontmatter.title}
            />
          ))}
        </Feed>
        <ActionLink href="/posts">All Posts</ActionLink>
      </div>
    </div>
  );
}
