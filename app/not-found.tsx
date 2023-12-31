import type { Metadata } from 'next';

import { Page } from '@/components/ui/layout/page';
import { readMDXFile } from '@/lib/mdx/read-mdx-file';

interface NotFoundPageFrontmatter {
  heading: string;
  lead: string;
  title: string;
}

const file = 'content/pages/not-found.mdx';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await readMDXFile<NotFoundPageFrontmatter>(file);

  return {
    title: frontmatter.title,
  };
}

export default async function NotFoundPage() {
  const { content, frontmatter } =
    await readMDXFile<NotFoundPageFrontmatter>(file);

  return (
    <Page>
      <Page.Header lead={frontmatter.lead}>{frontmatter.heading}</Page.Header>
      <Page.Body>{content}</Page.Body>
    </Page>
  );
}
