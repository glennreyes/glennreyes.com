import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { readMDXFile } from '@/lib/mdx/read-mdx-file';

interface ThankYouPageFrontmatter {
  lead: string;
  title: string;
}

const file = 'content/pages/subscribe/thank-you.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await readMDXFile<ThankYouPageFrontmatter>(file);

  return {
    title: frontmatter.title,
  };
}

export default async function ThankYouPage() {
  const { content, frontmatter } =
    await readMDXFile<ThankYouPageFrontmatter>(file);

  return (
    <Page>
      <Page.Header>{frontmatter.title}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
}
