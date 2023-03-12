import { readFile, readdir } from 'fs/promises';
import type { CompileMDXResult } from 'next-mdx-remote/rsc';
import { compileMDX } from 'next-mdx-remote/rsc';
import { join } from 'path';
import * as components from '~/components/ui/mdx';

const postsDirectory = join(process.cwd(), 'content/posts');

export async function getPostSlugs() {
  const files = await readdir(postsDirectory);

  return files.map((file) => file.replace(/\.mdx$/, ''));
}

interface CoverAuthor {
  name: string;
  url: string;
}

interface Cover {
  author: CoverAuthor;
  photo: string;
}

export interface Frontmatter {
  cover: Cover;
  date: string;
  description: string;
  published: boolean;
  title: string;
}

export interface GetPostBySlugReturn extends CompileMDXResult<Frontmatter> {
  slug: string;
  source: string;
}

export async function getPostBySlug(slug: string): Promise<GetPostBySlugReturn> {
  const slugs = await getPostSlugs();

  if (!slugs.includes(slug)) {
    throw new Error(`Could not find post with slug: ${slug}`);
  }

  const source = await readFile(join(postsDirectory, `${slug}/index.mdx`), 'utf8');
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    components,
    options: { parseFrontmatter: true },
    source,
  });

  return { content, frontmatter, slug, source };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();

  const allPosts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  return allPosts.sort((post1, post2) =>
    new Date(post1.frontmatter.date) > new Date(post2.frontmatter.date) ? -1 : 1,
  );
}
