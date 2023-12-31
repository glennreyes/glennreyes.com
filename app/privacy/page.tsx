import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { readMDXFile } from '@/lib/mdx/read-mdx-file';

interface PrivacyPageFrontmatter {
  lead: string;
  title: string;
}

const file = 'content/pages/privacy.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await readMDXFile<PrivacyPageFrontmatter>(file);

  return {
    title: frontmatter.title,
  };
}

export default async function PrivacyPage() {
  const { content, frontmatter } =
    await readMDXFile<PrivacyPageFrontmatter>(file);

  return (
    <Page>
      <Page.Header>{frontmatter.title}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
}
