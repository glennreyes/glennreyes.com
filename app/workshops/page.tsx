import { Feed } from '@/components/ui/layout/Feed';
import { Page } from '@/components/ui/layout/Page';
import { MDXRemoteContent } from '@/components/ui/mdx/MDXRemoteContent';
import { getAllWorkshops } from '@/lib/workshops';

export const metadata = {
  title: 'Workshops',
};

export default async function WorkshopsPage() {
  const allWorkshops = await getAllWorkshops();

  return (
    <Page>
      <Page.Header lead="Explore my portfolio of successful web development workshops that have empowered hundreds of engineers.">
        Teaching.
      </Page.Header>
      <Feed appearance="grid">
        {allWorkshops.map(({ slug, title, summary }) => (
          <Feed.Item
            action="Workshop Details"
            description={
              <div className="prose prose-slate text-slate-500">
                <MDXRemoteContent source={summary} />
              </div>
            }
            key={slug}
            link={`/workshops/${slug}`}
            title={title}
          />
        ))}
      </Feed>
    </Page>
  );
}
