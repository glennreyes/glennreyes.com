import type React from 'react';

import { allPosts as allPostsFromCollections } from 'content-collections';
import { compareDesc } from 'date-fns';
import { compileMDX } from 'next-mdx-remote/rsc';

import { components } from './mdx/components';
import { mdxRemoteOptions } from './mdx/read-mdx-file';

export interface PostFrontmatter {
  description: string;
  lead?: string;
  publishedAt: string;
  title: string;
}

interface Post {
  content: React.ReactElement;
  frontmatter: PostFrontmatter;
  slug: string;
}

const getAllPosts = async (): Promise<Post[]> => {
  const posts = allPostsFromCollections;
  const allPosts = await Promise.all(
    posts.map(async (post) => {
      const content = await compileMDX({
        components,
        options: mdxRemoteOptions,
        source: post.body,
      });

      return {
        content: content.content,
        frontmatter: {
          description: post.description,
          lead: post.lead,
          publishedAt: post.publishedAt,
          title: post.title,
        },
        slug: post.slug,
      };
    }),
  );

  return allPosts
    .filter((post) => !!post.frontmatter.publishedAt)
    .sort((a, b) =>
      compareDesc(
        new Date(a.frontmatter.publishedAt),
        new Date(b.frontmatter.publishedAt),
      ),
    );
};

export const getAllPublishedPosts = async (): Promise<Post[]> => {
  'use cache';

  const allPosts = await getAllPosts();
  const now = Date.now();

  return allPosts.filter((post) => {
    const publishedDate = new Date(post.frontmatter.publishedAt);

    return publishedDate.getTime() <= now;
  });
};
