import type { Metadata } from 'next';
import { Feed } from '~/components/ui/layout/Feed';
import { Page } from '~/components/ui/layout/Page';
import { MDXRemoteContent } from '~/components/ui/mdx/MDXRemoteContent';
import { composeTitle } from '~/lib/metadata';
import { getAllTalks } from '~/lib/talks';

export const metadata: Metadata = {
  title: composeTitle('Posts'),
};

export default async function PostsPage() {
  const allTalks = await getAllTalks();

  return (
    <Page>
      <Page.Header lead="All talks that I gave at conferences and meetups.">Speaking.</Page.Header>
      <Page.Body>
        <Feed>
          {allTalks.map(({ slug, title, abstract }) => (
            <Feed.Item
              action="Talk Details"
              description={
                <div className="line-clamp-4">
                  <MDXRemoteContent source={abstract} />
                </div>
              }
              key={slug}
              link={`/talks/${slug}`}
              title={title}
            />
          ))}
        </Feed>
      </Page.Body>
    </Page>
  );
}
