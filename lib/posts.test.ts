import { describe, expect, it, vi } from 'vitest';

import { getAllPosts, getAllPublishedPosts } from './posts';

// Mock the MDX functions
vi.mock('./mdx/get-mdx-files', () => ({
  getMDXFiles: vi.fn(() => [
    'test-post-1.mdx',
    'test-post-2.mdx',
    'future-post.mdx',
  ]),
}));

vi.mock('./mdx/read-mdx-file', () => ({
  readMDXFile: vi.fn((file) => {
    const mockPosts = {
      'content/posts/test-post-1.mdx': {
        content: 'Test content 1',
        frontmatter: {
          title: 'Test Post 1',
          description: 'Test description 1',
          publishedAt: '2023-01-01',
        },
      },
      'content/posts/test-post-2.mdx': {
        content: 'Test content 2',
        frontmatter: {
          title: 'Test Post 2',
          description: 'Test description 2',
          publishedAt: '2023-01-02',
        },
      },
      'content/posts/future-post.mdx': {
        content: 'Future content',
        frontmatter: {
          title: 'Future Post',
          description: 'Future description',
          publishedAt: '2030-01-01', // Future date
        },
      },
    };

    return Promise.resolve(mockPosts[file as keyof typeof mockPosts]);
  }),
}));

describe('posts', () => {
  describe('getAllPosts', () => {
    it('should return all posts sorted by publishedAt desc', async () => {
      const posts = await getAllPosts();

      expect(posts).toHaveLength(3);
      const titles = posts.map((p) => p.frontmatter.title);

      expect(titles).toEqual(['Future Post', 'Test Post 2', 'Test Post 1']);
    });
  });

  describe('getAllPublishedPosts', () => {
    it('should filter out future posts', async () => {
      // Mock the current date to be 2023-06-01
      const mockDate = new Date('2023-06-01');

      vi.setSystemTime(mockDate);

      const posts = await getAllPublishedPosts();

      expect(posts).toHaveLength(2);
      const titles = posts.map((p) => p.frontmatter.title);

      expect(titles).toEqual(['Test Post 2', 'Test Post 1']);
      expect(
        posts.find((p) => p.frontmatter.title === 'Future Post'),
      ).toBeUndefined();
    });

    it('should include posts published today', async () => {
      // Mock the current date to be 2023-01-02
      const mockDate = new Date('2023-01-02');

      vi.setSystemTime(mockDate);

      const posts = await getAllPublishedPosts();

      expect(posts).toHaveLength(2);
      const titles = posts.map((p) => p.frontmatter.title);

      expect(titles).toEqual(['Test Post 2', 'Test Post 1']);
    });
  });
});
