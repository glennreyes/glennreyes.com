import { Status } from '@prisma/client';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { z } from 'zod';

import type { MCPDataSources } from '@/lib/mcp';

import { handleToolCall, listTools, resolveDataSources } from '@/lib/mcp';

// Mock data that matches the actual types
const mockPosts = [
  {
    content: React.createElement('div', {}, 'Mock content'),
    frontmatter: {
      title: 'React 19 Preview',
      description: 'All about React 19',
      publishedAt: '2023-12-01',
    },
    slug: 'react-19',
  },
  {
    content: React.createElement('div', {}, 'Mock content'),
    frontmatter: {
      title: 'TypeScript Basics',
      description: 'TypeScript goodness',
      publishedAt: '2023-11-01',
    },
    slug: 'ts-basics',
  },
];
const mockTalks = [
  {
    title: 'Modern React Patterns',
    abstract: 'Patterns session',
    slug: 'react-patterns',
    status: Status.ACTIVE,
  },
];
const mockWorkshops = [
  {
    title: 'Advanced TypeScript Workshop',
    summary: 'Deep dive into TypeScript',
    slug: 'typescript-advanced',
    status: Status.ACTIVE,
  },
];
const mockEvents = [
  {
    name: 'Vienna JS',
    slug: 'vienna-js',
    startDate: new Date('2024-01-15'),
    location: { city: 'Vienna', country: 'Austria' },
    appearances: [],
  },
];
const createMockSources = (): MCPDataSources => {
  return resolveDataSources({
    getAllEvents: vi.fn().mockResolvedValue(mockEvents),
    getAllPosts: vi.fn().mockResolvedValue(mockPosts),
    getAllTalks: vi.fn().mockResolvedValue(mockTalks),
    getAllWorkshops: vi.fn().mockResolvedValue(mockWorkshops),
  });
};

describe('MCP core utilities', () => {
  it('lists all registered tools', () => {
    const tools = listTools();
    const names = tools.map((tool) => tool.name);

    expect(names).toContain('get_all_posts');
    expect(names).toContain('create_newsletter_campaign');
    expect(new Set(names).size).toBe(names.length);
  });

  it('returns all posts as formatted JSON', async () => {
    const response = await handleToolCall(
      'get_all_posts',
      {},
      createMockSources(),
    );

    expect(response.content).toBeDefined();
    expect(response.content?.[0]).toBeDefined();
    const responseSchema = z.object({
      content: z
        .array(
          z.object({
            text: z.string(),
          }),
        )
        .min(1),
    });
    const validatedResponse = responseSchema.parse(response);
    // Parse the JSON content to get the actual posts data
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const postsData = JSON.parse(validatedResponse.content[0]?.text ?? '[]');

    expect(postsData).toHaveLength(mockPosts.length);
  });

  it('returns all posts with UI resource for rich display', async () => {
    const response = await handleToolCall(
      'get_all_posts',
      {},
      createMockSources(),
    );

    expect(response.uiResource).toBeDefined();
    expect(response.uiResource).toBeDefined();
    if (!response.uiResource) throw new Error('Expected uiResource');
    expect(response.uiResource.type).toBe('inline-html');
    expect(response.uiResource.content).toContain('Blog Posts');
    expect(response.uiResource.metadata?.count).toBe(mockPosts.length);
    expect(response.uiResource.metadata?.title).toBe('Blog Posts');
  });

  it('returns a single post by slug', async () => {
    const response = await handleToolCall(
      'get_post_by_slug',
      { slug: 'react-19' },
      createMockSources(),
    );

    expect(response.content).toBeDefined();
    expect(response.content?.[0]).toBeDefined();
    const responseSchema = z.object({
      content: z.tuple([
        z.object({
          text: z
            .string()
            .transform((text) =>
              z.object({ slug: z.string() }).parse(JSON.parse(text)),
            ),
        }),
      ]),
    });
    const validatedResponse = responseSchema.parse(response);
    const payload = validatedResponse.content[0].text;

    expect(payload.slug).toBe('react-19');
  });

  it('flags an error when slug-specific lookups miss', async () => {
    const response = await handleToolCall(
      'get_post_by_slug',
      { slug: 'missing' },
      createMockSources(),
    );

    expect(response.isError).toBe(true);
    expect(response.content?.[0]?.text).toContain('not found');
  });

  it('searches across the requested content types', async () => {
    const response = await handleToolCall(
      'search_content',
      { contentType: 'workshops', query: 'typescript' },
      createMockSources(),
    );

    expect(response.content).toBeDefined();
    expect(response.content?.[0]).toBeDefined();
    const responseSchema = z.object({
      content: z.tuple([
        z.object({
          text: z
            .string()
            .transform((text) =>
              z.array(z.object({ type: z.string() })).parse(JSON.parse(text)),
            ),
        }),
      ]),
    });
    const validatedResponse = responseSchema.parse(response);
    const payload = validatedResponse.content[0].text;

    expect(payload.map((entry) => entry.type)).toEqual(['workshop']);
  });

  it('search results include UI resource with query context', async () => {
    const response = await handleToolCall(
      'search_content',
      { contentType: 'workshops', query: 'typescript' },
      createMockSources(),
    );

    expect(response.uiResource).toBeDefined();
    expect(response.uiResource).toBeDefined();
    if (!response.uiResource) throw new Error('Expected uiResource');
    expect(response.uiResource.type).toBe('inline-html');
    expect(response.uiResource.content).toContain(
      'Search Results for "typescript"',
    );
    expect(response.uiResource.metadata?.title).toBe(
      'Search Results for "typescript"',
    );
  });

  it('creates newsletter campaigns with sensible defaults', async () => {
    const response = await handleToolCall('create_newsletter_campaign', {
      content: 'Hello there',
      title: 'Weekly Update',
    });

    expect(response.content).toBeDefined();
    expect(response.content?.[0]).toBeDefined();
    const responseSchema = z.object({
      content: z.tuple([
        z.object({
          text: z.string().transform((text) =>
            z
              .object({
                content: z.string(),
                id: z.string(),
                status: z.string(),
                title: z.string(),
              })
              .parse(JSON.parse(text)),
          ),
        }),
      ]),
    });
    const validatedResponse = responseSchema.parse(response);
    const payload = validatedResponse.content[0].text;

    expect(payload.title).toBe('Weekly Update');
    expect(payload.content).toBe('Hello there');
    expect(payload.status).toBe('draft');
    expect(payload.id).toMatch(/^campaign_/);
  });

  it('surfaces errors for unknown tools', async () => {
    const response = await handleToolCall(
      'unsupported_tool',
      {},
      createMockSources(),
    );

    expect(response.isError).toBe(true);
    expect(response.content?.[0]?.text).toContain('Unknown tool');
  });
});
