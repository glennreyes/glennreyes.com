import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { readMDXFile } from '@/lib/mdx/read-mdx-file';

interface ConfirmPageFrontmatter {
  lead: string;
  title: string;
}

const file = 'content/pages/subscribe/confirm.mdx';

export const generateMetadata = async (): Promise<Metadata> => {
  const { frontmatter } = await readMDXFile<ConfirmPageFrontmatter>(file);

  return {
    title: frontmatter.title,
  };
};

const ConfirmPage = async () => {
  const { content, frontmatter } =
    await readMDXFile<ConfirmPageFrontmatter>(file);

  return (
    <Page>
      <Page.Header>{frontmatter.title}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
};

export default ConfirmPage;
