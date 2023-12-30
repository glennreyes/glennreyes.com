import type { Metadata } from 'next';

import { Feed } from '@/components/ui/layout/feed';
import { Page } from '@/components/ui/layout/page';
import { MDXRemoteContent } from '@/components/ui/mdx/mdx-remote-content';
import { getAllTalks } from '@/lib/talks';

export const metadata: Metadata = {
  title: 'Talks',
};

export default async function TalksPage() {
  const allTalks = await getAllTalks();

  return (
    <Page>
      <Page.Header lead="Browse through a collection of my past and upcoming conference and meetup talks.">
        Speaking.
      </Page.Header>
      <Page.Body>
        <Feed>
          {allTalks.map(({ abstract, slug, title }) => (
            <Feed.Item
              action="Talk Details"
              description={
                <div className="prose prose-slate text-slate-500">
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
