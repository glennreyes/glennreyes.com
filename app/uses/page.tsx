import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { getPageBySlug } from '@/lib/pages';

export const generateMetadata = async (): Promise<Metadata> => {
  const page = await getPageBySlug('uses');

  return {
    title: page?.frontmatter.title ?? 'Uses',
  };
};

const UsesPage = async () => {
  const page = await getPageBySlug('uses');

  if (!page) {
    return null;
  }

  const { content, frontmatter } = page;

  return (
    <Page>
      <Page.Header lead={frontmatter.lead}>{frontmatter.heading}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
};

export default UsesPage;
