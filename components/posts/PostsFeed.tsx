import { allPosts } from '~/lib/posts';
import { Feed } from '../ui/feed/Feed';
import { FeedCard } from '../ui/feed/FeedCard';

export function PostsFeed() {
  return (
    <Feed>
      {allPosts.map(({ excerpt, publishedAt, slug, title }) => (
        <FeedCard date={publishedAt} description={excerpt} key={slug} link={`/posts/${slug}`} title={title} />
      ))}
    </Feed>
  );
}
