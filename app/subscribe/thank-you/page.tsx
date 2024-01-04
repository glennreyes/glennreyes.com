import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { readMDXFile } from '@/lib/mdx/read-mdx-file';

interface ThankYouPageFrontmatter {
  lead: string;
  title: string;
}

const file = 'content/pages/subscribe/thank-you.mdx';

export const generateMetadata = async (): Promise<Metadata> => {
  const { frontmatter } = await readMDXFile<ThankYouPageFrontmatter>(file);

  return {
    title: frontmatter.title,
  };
};

const ThankYouPage = async () => {
  const { content, frontmatter } =
    await readMDXFile<ThankYouPageFrontmatter>(file);

  return (
    <Page>
      <Page.Header>{frontmatter.title}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
};

export default ThankYouPage;
