import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { getPageBySlug } from '@/lib/pages';

export const generateMetadata = async (): Promise<Metadata> => {
  const page = await getPageBySlug('privacy');

  return {
    title: page?.frontmatter.title ?? 'Privacy',
  };
};

const PrivacyPage = async () => {
  const page = await getPageBySlug('privacy');

  if (!page) {
    return null;
  }

  const { content, frontmatter } = page;

  return (
    <Page>
      <Page.Header lead={frontmatter.lead}>{frontmatter.title}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
};

export default PrivacyPage;
