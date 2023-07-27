import { notFound } from 'next/navigation';
import { Page } from '@/components/ui/layout/Page';
import { MDXContent } from '@/components/ui/mdx/MDXContent';
import { allPages } from 'contentlayer/generated';

const page = allPages.find(({ path }) => path === 'subscribe/confirm');

export const metadata = {
  title: page?.title,
};

export default function ConfirmPage() {
  if (!page) {
    notFound();
  }

  return (
    <Page>
      <Page.Header lead={page.lead} meta={page.meta}>
        {page.heading ?? page.title}
      </Page.Header>
      <Page.Body>
        <MDXContent code={page.body.code} />
      </Page.Body>
    </Page>
  );
}
