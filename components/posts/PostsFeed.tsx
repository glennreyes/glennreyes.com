import { Feed } from '~/components/ui/feed/Feed';
import { FeedCard } from '~/components/ui/feed/FeedCard';
import { allPosts } from '~/lib/posts';

export function PostsFeed() {
  return (
    <Feed>
      {allPosts.map(({ excerpt, publishedAt, slug, title }) => (
        <FeedCard date={publishedAt} description={excerpt} key={slug} link={`/posts/${slug}`} title={title} />
      ))}
    </Feed>
  );
}
