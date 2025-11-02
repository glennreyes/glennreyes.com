import type React from 'react';

import { allPages } from 'content-collections';
import { compileMDX } from 'next-mdx-remote/rsc';

import { components } from './mdx/components';
import { mdxRemoteOptions } from './mdx/read-mdx-file';

export interface PageFrontmatter {
  heading?: string;
  lead?: string;
  title?: string;
}

interface Page {
  content: React.ReactElement;
  frontmatter: PageFrontmatter;
  slug: string;
}

export const getPageBySlug = async (
  slug: string,
): Promise<Page | undefined> => {
  const pages = allPages;
  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    return undefined;
  }

  const content = await compileMDX({
    components,
    options: mdxRemoteOptions,
    source: page.body,
  });

  return {
    content: content.content,
    frontmatter: {
      heading: page.heading,
      lead: page.lead,
      title: page.title,
    },
    slug: page.slug,
  };
};
