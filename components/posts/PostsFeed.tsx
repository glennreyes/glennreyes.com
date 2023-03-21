import { allPosts } from '~/utils/posts';
import { Feed } from '../ui/post/Feed';
import { Post as PostItem } from '../ui/post/Post';

export function PostsFeed() {
  return (
    <Feed>
      {allPosts.map(({ excerpt, publishedAt, readingTime, slug, title }) => (
        <PostItem key={slug} post={{ excerpt, publishedAt, readingTime, slug, title }} />
      ))}
    </Feed>
  );
}
