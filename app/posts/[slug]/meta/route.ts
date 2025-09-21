import type { NextRequest } from 'next/server';

import { format, isThisYear } from 'date-fns';

import type { PostFrontmatter } from '@/lib/posts';
import type { RouteContext } from '@/types/next';

import { readMDXFile } from '@/lib/mdx/read-mdx-file';

export const GET = async (
  _: NextRequest,
  props: RouteContext<'/posts/[slug]/meta'>,
) => {
  try {
    const params = await props.params;
    const { frontmatter } = await readMDXFile<PostFrontmatter>(
      `content/posts/${params.slug}.mdx`,
    );
    const date = new Date(frontmatter.publishedAt);
    const publishedAt = format(
      date,
      isThisYear(date) ? 'MMMM d' : 'MMMM d, yyyy',
    );

    return Response.json({ publishedAt, title: frontmatter.title });
  } catch (error) {
    console.error('Error reading MDX file:', error);

    return Response.json(
      { error: 'Failed to read post metadata' },
      { status: 500 },
    );
  }
};
