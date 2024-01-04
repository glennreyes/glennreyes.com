import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { readMDXFile } from '@/lib/mdx/read-mdx-file';

interface LegalPageFrontmatter {
  title: string;
}

const file = 'content/pages/legal.mdx';

export const generateMetadata = async (): Promise<Metadata> => {
  const { frontmatter } = await readMDXFile<LegalPageFrontmatter>(file);

  return {
    title: frontmatter.title,
  };
};

const LegalPage = async () => {
  const { content, frontmatter } =
    await readMDXFile<LegalPageFrontmatter>(file);

  return (
    <Page>
      <Page.Header>{frontmatter.title}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
};

export default LegalPage;
