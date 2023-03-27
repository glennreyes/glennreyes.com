import { getAllTalks } from '~/lib/talks';
import { Feed } from '../ui/layout/Feed';
import { MDXRemoteContent } from '../ui/mdx/MDXRemoteContent';

export async function TalksFeed() {
  const allTalks = await getAllTalks();

  return (
    <Feed>
      {allTalks.map(({ slug, title, abstract }) => (
        <Feed.Item
          action="Talk Details"
          description={<MDXRemoteContent source={abstract} />}
          key={slug}
          link={`/talks/${slug}`}
          title={title}
        />
      ))}
    </Feed>
  );
}
