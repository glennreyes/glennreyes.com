import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';
import { Feed } from '../ui/post/Feed';
import { Post as PostItem } from '../ui/post/Post';

export function PostsFeed() {
  const posts = allPosts.filter((post): post is Post & { publishedAt: string } => !!post.publishedAt);

  return (
    <Feed>
      {posts.map(({ excerpt, publishedAt, readingTime, slug, title }) => (
        <PostItem key={slug} post={{ excerpt, publishedAt, readingTime, slug, title }} />
      ))}
    </Feed>
  );
}
