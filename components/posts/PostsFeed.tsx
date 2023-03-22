import { allPosts } from '~/lib/posts';
import { Feed } from '../ui/layout/Feed';

export function PostsFeed() {
  return (
    <Feed>
      {allPosts.map(({ excerpt, publishedAt, slug, title }) => (
        <Feed.Card date={publishedAt} description={excerpt} key={slug} link={`/posts/${slug}`} title={title} />
      ))}
    </Feed>
  );
}
