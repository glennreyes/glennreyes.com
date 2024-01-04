import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { readMDXFile } from '@/lib/mdx/read-mdx-file';

interface UsesPageFrontmatter {
  heading: string;
  lead: string;
  title: string;
}

const file = 'content/pages/uses.mdx';

export const generateMetadata = async (): Promise<Metadata> => {
  const { frontmatter } = await readMDXFile<UsesPageFrontmatter>(file);

  return {
    title: frontmatter.title,
  };
};

const UsesPage = async () => {
  const { content, frontmatter } = await readMDXFile<UsesPageFrontmatter>(file);

  return (
    <Page>
      <Page.Header lead={frontmatter.lead}>{frontmatter.heading}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
};

export default UsesPage;
