import React from 'react';
import { describe, expect, it, vi, beforeEach } from 'vitest';

const getCurrentTimestampMock = vi.fn(() => new Date('2024-01-01').getTime());

vi.mock('./time', () => ({
  getCurrentTimestamp: getCurrentTimestampMock,
}));

vi.mock('content-collections', () => ({
  allPosts: [
    {
      body: 'Test content 1',
      description: 'Test description 1',
      publishedAt: '2023-01-01',
      slug: 'test-post-1',
      title: 'Test Post 1',
    },
    {
      body: 'Test content 2',
      description: 'Test description 2',
      publishedAt: '2023-01-02',
      slug: 'test-post-2',
      title: 'Test Post 2',
    },
    {
      body: 'Future content',
      description: 'Future description',
      publishedAt: '2030-01-01',
      slug: 'future-post',
      title: 'Future Post',
    },
  ],
}));

vi.mock('next-mdx-remote/rsc', () => ({
  compileMDX: vi.fn(({ source }: { source: string }) =>
    Promise.resolve({
      content: React.createElement('div', null, source),
      frontmatter: {},
    }),
  ),
}));

const { getAllPublishedPosts } = await import('./posts');

describe('posts', () => {
  beforeEach(() => {
    getCurrentTimestampMock.mockResolvedValue(new Date('2024-01-01').getTime());
  });

  describe('getAllPublishedPosts', () => {
    it('should return all posts sorted by publishedAt desc', async () => {
      getCurrentTimestampMock.mockResolvedValueOnce(
        new Date('2031-01-01').getTime(),
      );
      const posts = await getAllPublishedPosts();

      expect(posts).toHaveLength(2);
      const titles = posts.map((p) => p.frontmatter.title);

      expect(titles).toEqual(['Test Post 2', 'Test Post 1']);
    });
  });

  describe('getAllPublishedPosts', () => {
    it('should filter out future posts', async () => {
      getCurrentTimestampMock.mockResolvedValueOnce(
        new Date('2023-06-01').getTime(),
      );
      const posts = await getAllPublishedPosts();

      expect(posts).toHaveLength(2);
      const titles = posts.map((p) => p.frontmatter.title);

      expect(titles).toEqual(['Test Post 2', 'Test Post 1']);
      expect(
        posts.find((p) => p.frontmatter.title === 'Future Post'),
      ).toBeUndefined();
    });

    it('should include posts published today', async () => {
      getCurrentTimestampMock.mockResolvedValueOnce(
        new Date('2023-01-02').getTime(),
      );
      const posts = await getAllPublishedPosts();

      expect(posts).toHaveLength(2);
      const titles = posts.map((p) => p.frontmatter.title);

      expect(titles).toEqual(['Test Post 2', 'Test Post 1']);
    });
  });
});
