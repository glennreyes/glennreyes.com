import type { Metadata } from 'next';
import { Feed } from '~/components/ui/layout/Feed';
import { Page } from '~/components/ui/layout/Page';
import { MDXRemoteContent } from '~/components/ui/mdx/MDXRemoteContent';
import { composeTitle } from '~/lib/metadata';
import { getAllWorkshops } from '~/lib/workshops';

export const metadata: Metadata = {
  title: composeTitle('Posts'),
};

export default async function PostsPage() {
  const allWorkshops = await getAllWorkshops();

  return (
    <Page>
      <Page.Header lead="I've been teaching hundreds of engineers to enhance their skills and knowledge in web development.">
        Teaching.
      </Page.Header>
      <Page.Body>
        <Feed>
          {allWorkshops.map(({ slug, title, abstract }) => (
            <Feed.Item
              action="Workshop Details"
              description={<MDXRemoteContent source={abstract} />}
              key={slug}
              link={`/workshops/${slug}`}
              title={title}
            />
          ))}
        </Feed>
      </Page.Body>
    </Page>
  );
}
