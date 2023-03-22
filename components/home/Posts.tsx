import { allPosts } from '~/lib/posts';
import { Feed } from '../ui/feed/Feed';
import { FeedCard } from '../ui/feed/FeedCard';
import { Section } from '../ui/layout/Section';

export function Posts() {
  const posts = allPosts.slice(0, 4);

  return (
    <Section>
      <Feed>
        {posts.map(({ excerpt, publishedAt, slug, title }) => (
          <FeedCard date={publishedAt} description={excerpt} key={slug} link={`/posts/${slug}`} title={title} />
        ))}
      </Feed>
    </Section>
  );
}
