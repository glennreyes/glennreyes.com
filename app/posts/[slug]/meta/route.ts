import type { NextRequest } from 'next/server';

import { format, isThisYear } from 'date-fns';

import type { RouteContext } from '@/types/next';

import { getAllPublishedPosts } from '@/lib/posts';

export const GET = async (
  _: NextRequest,
  props: RouteContext<'/posts/[slug]/meta'>,
) => {
  try {
    const params = await props.params;
    const allPosts = await getAllPublishedPosts();
    const post = allPosts.find((p) => p.slug === params.slug);

    if (!post) {
      return Response.json({ error: 'Post not found' }, { status: 404 });
    }

    const date = new Date(post.frontmatter.publishedAt);
    const publishedAt = format(
      date,
      isThisYear(date) ? 'MMMM d' : 'MMMM d, yyyy',
    );

    return Response.json({ publishedAt, title: post.frontmatter.title });
  } catch (error) {
    console.error('Error reading post metadata:', error);

    return Response.json(
      { error: 'Failed to read post metadata' },
      { status: 500 },
    );
  }
};
