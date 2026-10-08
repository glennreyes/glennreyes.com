import { getAllPublishedPosts } from '@/lib/posts';

import { Feed, FeedItem } from '../ui/layout/feed';

export async function Posts() {
  const allPosts = await getAllPublishedPosts();
  const posts = allPosts.slice(0, 2);

  return (
    <Feed>
      {posts.map(({ frontmatter, slug }) => (
        <FeedItem
          description={frontmatter.description}
          key={slug}
          link={'/posts/' + slug}
          title={frontmatter.title}
        />
      ))}
    </Feed>
  );
}
