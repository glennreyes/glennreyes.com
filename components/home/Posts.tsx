import { allPosts } from '~/lib/posts';
import { Feed } from '../ui/layout/Feed';
import { Section } from '../ui/layout/Section';

export function Posts() {
  const posts = allPosts.slice(0, 4);

  return (
    <Section>
      <Feed>
        {posts.map(({ excerpt, publishedAt, slug, title }) => (
          <Feed.Card date={publishedAt} description={excerpt} key={slug} link={`/posts/${slug}`} title={title} />
        ))}
      </Feed>
    </Section>
  );
}
