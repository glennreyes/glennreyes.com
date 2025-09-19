import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  handleToolCall,
  listTools,
  resolveDataSources,
  type MCPDataSources,
} from '@/lib/mcp/core';

const sampleData = {
  events: [
    {
      location: { city: 'Vienna', country: 'Austria' },
      name: 'Vienna JS',
      slug: 'vienna-js',
    },
  ],
  posts: [
    {
      description: 'All about React 19',
      slug: 'react-19',
      tags: ['react', 'javascript'],
      title: 'React 19 Preview',
    },
    {
      description: 'TypeScript goodness',
      slug: 'ts-basics',
      tags: ['typescript'],
      title: 'TypeScript Basics',
    },
  ],
  talks: [
    {
      description: 'Patterns session',
      slug: 'react-patterns',
      tags: ['react'],
      title: 'Modern React Patterns',
    },
  ],
  workshops: [
    {
      description: 'Deep dive into TypeScript',
      slug: 'typescript-advanced',
      tags: ['typescript'],
      title: 'Advanced TypeScript Workshop',
    },
  ],
};

const createSources = (): MCPDataSources =>
  resolveDataSources({
    getAllEvents: async () => sampleData.events,
    getAllPosts: async () => sampleData.posts,
    getAllTalks: async () => sampleData.talks,
    getAllWorkshops: async () => sampleData.workshops,
  });

describe('MCP core utilities', () => {
  it('lists all registered tools', () => {
    const tools = listTools();
    const names = tools.map((tool) => tool.name);

    assert.ok(names.includes('get_all_posts'));
    assert.ok(names.includes('create_newsletter_campaign'));
    assert.equal(new Set(names).size, names.length, 'tool names must be unique');
  });

  it('returns all posts as formatted JSON', async () => {
    const response = await handleToolCall('get_all_posts', {}, createSources());

    assert.ok(response.content);
    const payload = JSON.parse(response.content[0].text) as unknown[];
    assert.equal(payload.length, sampleData.posts.length);
  });

  it('returns a single post by slug', async () => {
    const response = await handleToolCall(
      'get_post_by_slug',
      { slug: 'react-19' },
      createSources(),
    );

    assert.ok(response.content);
    const payload = JSON.parse(response.content[0].text) as { slug: string };
    assert.equal(payload.slug, 'react-19');
  });

  it('flags an error when slug-specific lookups miss', async () => {
    const response = await handleToolCall(
      'get_post_by_slug',
      { slug: 'missing' },
      createSources(),
    );

    assert.equal(response.isError, true);
    assert.ok(response.content?.[0].text.includes('not found'));
  });

  it('searches across the requested content types', async () => {
    const response = await handleToolCall(
      'search_content',
      { contentType: 'workshops', query: 'typescript' },
      createSources(),
    );

    assert.ok(response.content);
    const payload = JSON.parse(response.content[0].text) as { type: string }[];
    assert.deepEqual(payload.map((entry) => entry.type), ['workshop']);
  });

  it('creates newsletter campaigns with sensible defaults', async () => {
    const response = await handleToolCall(
      'create_newsletter_campaign',
      { content: 'Hello there', title: 'Weekly Update' },
    );

    assert.ok(response.content);
    const payload = JSON.parse(response.content[0].text) as {
      content: string;
      id: string;
      status: string;
      title: string;
    };

    assert.equal(payload.title, 'Weekly Update');
    assert.equal(payload.content, 'Hello there');
    assert.equal(payload.status, 'draft');
    assert.ok(payload.id.startsWith('campaign_'));
  });

  it('surfaces errors for unknown tools', async () => {
    const response = await handleToolCall('unsupported_tool', {}, createSources());

    assert.equal(response.isError, true);
    assert.ok(response.content?.[0].text.includes('Unknown tool'));
  });
});
