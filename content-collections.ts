import { defineCollection, defineConfig } from '@content-collections/core';
import { z } from 'zod';

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '*.mdx',
  schema: z.object({
    content: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    lead: z.string().optional(),
    title: z.string(),
  }),
  transform: (data) => {
    const slug = data._meta.path.replace(/\.mdx$/, '');

    return {
      ...data,
      body: data.content,
      slug,
    };
  },
});
const pages = defineCollection({
  name: 'pages',
  directory: 'content/pages',
  include: '**/*.mdx',
  schema: z.object({
    content: z.string(),
    heading: z.string().optional(),
    lead: z.string().optional(),
    title: z.string().optional(),
  }),
  transform: (data) => {
    const slug = data._meta.path.replace(/\.mdx$/, '');

    return {
      ...data,
      body: data.content,
      slug,
    };
  },
});

export default defineConfig({
  collections: [posts, pages],
});
