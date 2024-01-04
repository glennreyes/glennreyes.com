import { getAllPosts } from '@/lib/posts';

import { Feed } from '../ui/layout/feed';

export const PostsFeed = async () => {
  const allPosts = await getAllPosts();

  return (
    <Feed>
      {allPosts.map(({ frontmatter, slug }) => (
        <Feed.Item
          action="Read Article"
          date={frontmatter.publishedAt}
          description={frontmatter.description}
          key={slug}
          link={`/posts/${slug}`}
          title={frontmatter.title}
        />
      ))}
    </Feed>
  );
};
