import { getAllPublishedPosts } from '@/lib/posts';

import { Feed, FeedItem } from '../ui/layout/feed';

export const PostsFeed = async () => {
  const allPosts = await getAllPublishedPosts();

  return (
    <Feed>
      {allPosts.map(({ frontmatter, slug }) => (
        <FeedItem
          action="Read Article"
          description={frontmatter.description}
          key={slug}
          link={`/posts/${slug}`}
          title={frontmatter.title}
        />
      ))}
    </Feed>
  );
};
