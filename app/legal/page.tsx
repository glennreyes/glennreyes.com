import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { getPageBySlug } from '@/lib/pages';

export const generateMetadata = async (): Promise<Metadata> => {
  const page = await getPageBySlug('legal');

  return {
    title: page?.frontmatter.title ?? 'Legal',
  };
};

const LegalPage = async () => {
  const page = await getPageBySlug('legal');

  if (!page) {
    return null;
  }

  const { content, frontmatter } = page;

  return (
    <Page>
      <Page.Header>{frontmatter.title}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
};

export default LegalPage;
