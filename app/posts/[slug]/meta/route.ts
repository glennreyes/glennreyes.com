import type { PostFrontmatter } from '@/lib/posts';
import type { NextRequest } from 'next/server';

import { readMDXFile } from '@/lib/mdx/read-mdx-file';
import { format, isThisYear } from 'date-fns';

export const GET = async (
  _: NextRequest,
  props: RouteContext<'/posts/[slug]/meta'>,
) => {
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
};
