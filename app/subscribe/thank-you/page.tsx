import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { getPageBySlug } from '@/lib/pages';

export const generateMetadata = async (): Promise<Metadata> => {
  const page = await getPageBySlug('subscribe/thank-you');

  return {
    title: page?.frontmatter.title ?? 'Thank You',
  };
};

const ThankYouPage = async () => {
  const page = await getPageBySlug('subscribe/thank-you');

  if (!page) {
    return null;
  }

  const { content, frontmatter } = page;

  return (
    <Page>
      <Page.Header>{frontmatter.heading ?? frontmatter.title}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
};

export default ThankYouPage;
