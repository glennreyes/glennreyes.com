import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { readMDXFile } from '@/lib/mdx/read-mdx-file';

interface LegalPageFrontmatter {
  title: string;
}

const file = 'content/pages/legal.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await readMDXFile<LegalPageFrontmatter>(file);

  return {
    title: frontmatter.title,
  };
}

export default async function LegalPage() {
  const { content, frontmatter } =
    await readMDXFile<LegalPageFrontmatter>(file);

  return (
    <Page>
      <Page.Header>{frontmatter.title}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
}
