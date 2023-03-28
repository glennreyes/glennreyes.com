import { allPages } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Page } from '~/components/ui/layout/Page';
import { MDXContent } from '~/components/ui/mdx/MDXContent';
import { composeTitle } from '~/lib/metadata';

const page = allPages.find(({ path }) => path === 'uses');

export const metadata = {
  title: composeTitle(page?.title),
};

export default function UsesPage() {
  if (!page) {
    notFound();
  }

  return (
    <Page>
      <Page.Header lead={page.lead}>{page.heading ?? page.title}</Page.Header>
      <Page.Body>
        <MDXContent code={page.body.code} />
      </Page.Body>
    </Page>
  );
}
