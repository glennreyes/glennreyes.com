#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

// Mock data functions for standalone operation
const getMockPosts = () => [
  {
    slug: 'react-19-features',
    title: 'React 19: New Features and Updates',
    description: 'Exploring the latest features in React 19',
    tags: ['react', 'javascript', 'frontend'],
    publishedAt: new Date('2024-01-15'),
  },
  {
    slug: 'typescript-performance',
    title: 'TypeScript Performance Optimization',
    description: 'Tips for improving TypeScript compilation speed',
    tags: ['typescript', 'performance', 'development'],
    publishedAt: new Date('2024-01-10'),
  },
];
const getMockTalks = () => [
  {
    slug: 'modern-react-patterns',
    title: 'Modern React Patterns',
    description: 'Advanced patterns for React development',
    tags: ['react', 'patterns', 'architecture'],
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    description: 'Writing maintainable TypeScript code',
    tags: ['typescript', 'best-practices'],
  },
];
const getMockWorkshops = () => [
  {
    slug: 'react-fundamentals',
    title: 'React Fundamentals Workshop',
    description: 'Learn React from the ground up',
    tags: ['react', 'fundamentals', 'workshop'],
  },
  {
    slug: 'advanced-typescript',
    title: 'Advanced TypeScript Workshop',
    description: 'Master advanced TypeScript concepts',
    tags: ['typescript', 'advanced', 'workshop'],
  },
];
const getMockEvents = () => [
  {
    slug: 'react-conf-2024',
    name: 'React Conf 2024',
    startDate: new Date('2024-05-15'),
    endDate: new Date('2024-05-17'),
    location: { name: 'San Francisco', country: 'USA' },
    url: 'https://reactconf.com',
    appearances: [],
  },
  {
    slug: 'typescript-summit-2024',
    name: 'TypeScript Summit 2024',
    startDate: new Date('2024-06-20'),
    endDate: new Date('2024-06-21'),
    location: { name: 'New York', country: 'USA' },
    url: 'https://typescriptsummit.com',
    appearances: [],
  },
];
const server = new Server(
  {
    name: 'glennreyes-portfolio',
    version: '1.0.0',
    description: 'MCP server for Glenn Reyes portfolio management',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

// Tool definitions
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_all_posts',
        description: 'Get all blog posts with their metadata',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'get_post_by_slug',
        description: 'Get a specific blog post by slug',
        inputSchema: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'The slug of the post',
            },
          },
          required: ['slug'],
        },
      },
      {
        name: 'get_all_talks',
        description: 'Get all talks with their metadata',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'get_talk_by_slug',
        description: 'Get a specific talk by slug',
        inputSchema: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'The slug of the talk',
            },
          },
          required: ['slug'],
        },
      },
      {
        name: 'get_all_workshops',
        description: 'Get all workshops with their metadata',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'get_workshop_by_slug',
        description: 'Get a specific workshop by slug',
        inputSchema: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'The slug of the workshop',
            },
          },
          required: ['slug'],
        },
      },
      {
        name: 'get_all_appearances',
        description: 'Get all appearances (events) with their metadata',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'get_appearance_by_slug',
        description: 'Get a specific appearance/event by slug',
        inputSchema: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              description: 'The slug of the appearance/event',
            },
          },
          required: ['slug'],
        },
      },
      {
        name: 'search_content',
        description: 'Search across all content (posts, talks, workshops)',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Search query',
            },
            contentType: {
              type: 'string',
              enum: ['all', 'posts', 'talks', 'workshops'],
              description: 'Type of content to search',
              default: 'all',
            },
          },
          required: ['query'],
        },
      },
      {
        name: 'get_newsletter_stats',
        description: 'Get newsletter subscription statistics',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'create_newsletter_campaign',
        description: 'Create a newsletter campaign',
        inputSchema: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'Campaign title',
            },
            content: {
              type: 'string',
              description: 'Newsletter content',
            },
            scheduledDate: {
              type: 'string',
              description: 'Scheduled date (ISO string)',
            },
          },
          required: ['title', 'content'],
        },
      },
    ],
  };
});

// Tool implementations
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'get_all_posts': {
        const posts = getMockPosts();

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(posts, null, 2),
            },
          ],
        };
      }

      case 'get_post_by_slug': {
        const { slug } = z.object({ slug: z.string() }).parse(args);
        const posts = getMockPosts();
        const post = posts.find((p) => p.slug === slug);

        if (!post) {
          throw new Error(`Post with slug "${slug}" not found`);
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(post, null, 2),
            },
          ],
        };
      }

      case 'get_all_talks': {
        const talks = getMockTalks();

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(talks, null, 2),
            },
          ],
        };
      }

      case 'get_talk_by_slug': {
        const { slug } = z.object({ slug: z.string() }).parse(args);
        const talks = getMockTalks();
        const talk = talks.find((t) => t.slug === slug);

        if (!talk) {
          throw new Error(`Talk with slug "${slug}" not found`);
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(talk, null, 2),
            },
          ],
        };
      }

      case 'get_all_workshops': {
        const workshops = getMockWorkshops();

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(workshops, null, 2),
            },
          ],
        };
      }

      case 'get_workshop_by_slug': {
        const { slug } = z.object({ slug: z.string() }).parse(args);
        const workshops = getMockWorkshops();
        const workshop = workshops.find((w) => w.slug === slug);

        if (!workshop) {
          throw new Error(`Workshop with slug "${slug}" not found`);
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(workshop, null, 2),
            },
          ],
        };
      }

      case 'get_all_appearances': {
        const events = getMockEvents();

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(events, null, 2),
            },
          ],
        };
      }

      case 'get_appearance_by_slug': {
        const { slug } = z.object({ slug: z.string() }).parse(args);
        const events = getMockEvents();
        const event = events.find((e) => e.slug === slug);

        if (!event) {
          throw new Error(`Appearance with slug "${slug}" not found`);
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(event, null, 2),
            },
          ],
        };
      }

      case 'search_content': {
        const { query, contentType = 'all' } = z
          .object({
            query: z.string(),
            contentType: z
              .enum(['all', 'posts', 'talks', 'workshops'])
              .optional(),
          })
          .parse(args);
        const results = [];

        if (contentType === 'all' || contentType === 'posts') {
          const posts = getMockPosts();
          const matchingPosts = posts.filter(
            (post) =>
              post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.description.toLowerCase().includes(query.toLowerCase()) ||
              post.tags.some((tag) =>
                tag.toLowerCase().includes(query.toLowerCase()),
              ),
          );

          results.push(
            ...matchingPosts.map((post) => ({ type: 'post', ...post })),
          );
        }

        if (contentType === 'all' || contentType === 'talks') {
          const talks = getMockTalks();
          const matchingTalks = talks.filter(
            (talk) =>
              talk.title.toLowerCase().includes(query.toLowerCase()) ||
              talk.description.toLowerCase().includes(query.toLowerCase()) ||
              talk.tags.some((tag) =>
                tag.toLowerCase().includes(query.toLowerCase()),
              ),
          );

          results.push(
            ...matchingTalks.map((talk) => ({ type: 'talk', ...talk })),
          );
        }

        if (contentType === 'all' || contentType === 'workshops') {
          const workshops = getMockWorkshops();
          const matchingWorkshops = workshops.filter(
            (workshop) =>
              workshop.title.toLowerCase().includes(query.toLowerCase()) ||
              workshop.description
                .toLowerCase()
                .includes(query.toLowerCase()) ||
              workshop.tags.some((tag) =>
                tag.toLowerCase().includes(query.toLowerCase()),
              ),
          );

          results.push(
            ...matchingWorkshops.map((workshop) => ({
              type: 'workshop',
              ...workshop,
            })),
          );
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(results, null, 2),
            },
          ],
        };
      }

      case 'get_newsletter_stats': {
        const stats = {
          totalSubscribers: 1250,
          growthRate: '+12%',
          lastCampaign: {
            title: 'React 19 Updates & Performance Tips',
            sentDate: '2024-01-15',
            openRate: '68%',
            clickRate: '15%',
          },
          upcomingCampaigns: 2,
        };

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(stats, null, 2),
            },
          ],
        };
      }

      case 'create_newsletter_campaign': {
        const { title, content, scheduledDate } = z
          .object({
            title: z.string(),
            content: z.string(),
            scheduledDate: z.string().optional(),
          })
          .parse(args);
        const campaign = {
          id: `campaign_${Date.now()}`,
          title,
          content,
          scheduledDate: scheduledDate || new Date().toISOString(),
          status: 'draft',
          estimatedRecipients: 1250,
          createdAt: new Date().toISOString(),
        };

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(campaign, null, 2),
            },
          ],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    return {
      content: [
        {
          type: 'text',
          text: `Error: ${message}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error('Glenn Reyes Portfolio MCP Server started');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
  });
}
