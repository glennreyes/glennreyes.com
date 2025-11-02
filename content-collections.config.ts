import { defineCollection, defineConfig } from '@content-collections/core';
import { z } from 'zod';

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    lead: z.string().optional(),
  }),
  transform: (data) => {
    const slug = data._meta.path.replace(/\.mdx$/, '');

    return {
      ...data,
      slug,
    };
  },
});
const pages = defineCollection({
  name: 'pages',
  directory: 'content/pages',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
  }),
  transform: (data) => {
    const slug = data._meta.path.replace(/\.mdx$/, '');

    return {
      ...data,
      slug,
    };
  },
});

export default defineConfig({
  collections: [posts, pages],
});
