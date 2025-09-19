import React from 'react';

import { getAllEvents } from '@/lib/events';
import { getAllPosts } from '@/lib/posts';
import { getAllTalks } from '@/lib/talks';
import { getAllWorkshops } from '@/lib/workshops';

export interface MCPToolDefinition {
  description: string;
  inputSchema: {
    properties?: Record<string, unknown>;
    required?: string[];
    type: string;
  };
  name: string;
}

export interface MCPContentDocument {
  text: string;
  type: 'text';
}

export interface MCPUIResource {
  content: string;
  metadata?: Record<string, unknown>;
  type: 'inline-html' | 'external-url' | 'remote-dom';
}

export interface MCPResponse {
  content?: MCPContentDocument[];
  isError?: boolean;
  tools?: MCPToolDefinition[];
  uiResource?: MCPUIResource;
}

// Types for searchable content
export interface SearchablePost {
  frontmatter: {
    title: string;
    description: string;
    lead?: string;
    publishedAt: string;
  };
  slug: string;
  content: React.ReactElement;
}

export interface SearchableTalk {
  title: string;
  abstract: string;
  slug: string;
  status: string;
  tags?: string[];
}

export interface SearchableWorkshop {
  title: string;
  summary: string;
  slug: string;
  status: string;
  tags?: string[];
}

export interface SearchableEvent {
  name: string;
  slug: string;
  startDate: Date;
  location: {
    city: string;
    country: string;
    state?: string;
  };
  appearances: {
    talk?: { title: string };
    workshop?: { title: string };
  }[];
}

// Union type for all searchable content
export type SearchableContent =
  | SearchablePost
  | SearchableTalk
  | SearchableWorkshop
  | SearchableEvent;

export interface MCPDataSources {
  getAllEvents: typeof getAllEvents;
  getAllPosts: typeof getAllPosts;
  getAllTalks: typeof getAllTalks;
  getAllWorkshops: typeof getAllWorkshops;
}

const defaultDataSources: MCPDataSources = {
  getAllEvents,
  getAllPosts,
  getAllTalks,
  getAllWorkshops,
};
const MCP_TOOLS: MCPToolDefinition[] = [
  {
    description: 'Get all blog posts with their metadata',
    inputSchema: {
      properties: {},
      type: 'object',
    },
    name: 'get_all_posts',
  },
  {
    description: 'Get a specific blog post by slug',
    inputSchema: {
      properties: {
        slug: {
          description: 'The slug of the post',
          type: 'string',
        },
      },
      required: ['slug'],
      type: 'object',
    },
    name: 'get_post_by_slug',
  },
  {
    description: 'Get all talks with their metadata',
    inputSchema: {
      properties: {},
      type: 'object',
    },
    name: 'get_all_talks',
  },
  {
    description: 'Get a specific talk by slug',
    inputSchema: {
      properties: {
        slug: {
          description: 'The slug of the talk',
          type: 'string',
        },
      },
      required: ['slug'],
      type: 'object',
    },
    name: 'get_talk_by_slug',
  },
  {
    description: 'Get all workshops with their metadata',
    inputSchema: {
      properties: {},
      type: 'object',
    },
    name: 'get_all_workshops',
  },
  {
    description: 'Get a specific workshop by slug',
    inputSchema: {
      properties: {
        slug: {
          description: 'The slug of the workshop',
          type: 'string',
        },
      },
      required: ['slug'],
      type: 'object',
    },
    name: 'get_workshop_by_slug',
  },
  {
    description: 'Get all appearances (events) with their metadata',
    inputSchema: {
      properties: {},
      type: 'object',
    },
    name: 'get_all_appearances',
  },
  {
    description: 'Get a specific appearance/event by slug',
    inputSchema: {
      properties: {
        slug: {
          description: 'The slug of the appearance/event',
          type: 'string',
        },
      },
      required: ['slug'],
      type: 'object',
    },
    name: 'get_appearance_by_slug',
  },
  {
    description: 'Search across all content (posts, talks, workshops)',
    inputSchema: {
      properties: {
        contentType: {
          default: 'all',
          description: 'Type of content to search',
          enum: ['all', 'posts', 'talks', 'workshops'],
          type: 'string',
        },
        query: {
          description: 'Search query',
          type: 'string',
        },
      },
      required: ['query'],
      type: 'object',
    },
    name: 'search_content',
  },
  {
    description: 'Get newsletter subscription statistics',
    inputSchema: {
      properties: {},
      type: 'object',
    },
    name: 'get_newsletter_stats',
  },
  {
    description: 'Create a newsletter campaign',
    inputSchema: {
      properties: {
        content: {
          description: 'Newsletter content',
          type: 'string',
        },
        scheduledDate: {
          description: 'Scheduled date (ISO string)',
          type: 'string',
        },
        title: {
          description: 'Campaign title',
          type: 'string',
        },
      },
      required: ['title', 'content'],
      type: 'object',
    },
    name: 'create_newsletter_campaign',
  },
];

export const listTools = () => MCP_TOOLS;

const toJSONContent = (value: unknown): MCPResponse => ({
  content: [
    {
      text: JSON.stringify(value, null, 2),
      type: 'text',
    },
  ],
});
const createInteractiveTable = (
  data: unknown[],
  title: string,
): MCPResponse => {
  const tableHTML = `
    <div style="font-family: system-ui, sans-serif; padding: 20px; max-width: 100%; overflow-x: auto;">
      <h2 style="margin-bottom: 16px; color: #1f2937;">${title}</h2>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
        <pre style="margin: 0; white-space: pre-wrap; color: #374151; font-size: 14px;">${JSON.stringify(data, null, 2)}</pre>
      </div>
      <p style="margin-top: 12px; color: #6b7280; font-size: 14px;">
        ${Array.isArray(data) ? data.length : 1} item${Array.isArray(data) && data.length !== 1 ? 's' : ''} found
      </p>
    </div>
  `;

  return {
    content: [
      {
        text: JSON.stringify(data, null, 2),
        type: 'text',
      },
    ],
    uiResource: {
      content: tableHTML,
      type: 'inline-html',
      metadata: {
        count: Array.isArray(data) ? data.length : 1,
        title,
      },
    },
  };
};

export function resolveDataSources(
  overrides: Partial<MCPDataSources> = {},
): MCPDataSources {
  return {
    getAllEvents: overrides.getAllEvents ?? defaultDataSources.getAllEvents,
    getAllPosts: overrides.getAllPosts ?? defaultDataSources.getAllPosts,
    getAllTalks: overrides.getAllTalks ?? defaultDataSources.getAllTalks,
    getAllWorkshops:
      overrides.getAllWorkshops ?? defaultDataSources.getAllWorkshops,
  };
}

const validateString = (value: unknown, fieldName: string): string => {
  if (typeof value !== 'string') {
    throw new Error(`${fieldName} must be a string`);
  }

  return value;
};
const validateSlug = (slug: unknown): string => validateString(slug, 'Slug');
const findBySlug = <T extends { slug: string }>(
  items: T[],
  slug: string,
  type: string,
): T => {
  const item = items.find((candidate) => candidate.slug === slug);

  if (!item) {
    throw new Error(`${type} with slug "${slug}" not found`);
  }

  return item;
};

export async function handleToolCall(
  toolName: string,
  args: Record<string, unknown>,
  dataSources: MCPDataSources = defaultDataSources,
): Promise<MCPResponse> {
  try {
    switch (toolName) {
      case 'get_all_posts': {
        const posts = await dataSources.getAllPosts();

        return createInteractiveTable(posts, 'Blog Posts');
      }

      case 'get_post_by_slug': {
        const slug = validateSlug(args.slug);
        const posts = await dataSources.getAllPosts();
        const post = findBySlug(posts, slug, 'Post');

        return toJSONContent(post);
      }

      case 'get_all_talks': {
        const talks = await dataSources.getAllTalks();

        return createInteractiveTable(talks, 'Talks & Presentations');
      }

      case 'get_talk_by_slug': {
        const slug = validateSlug(args.slug);
        const talks = await dataSources.getAllTalks();
        const talk = findBySlug(talks, slug, 'Talk');

        return toJSONContent(talk);
      }

      case 'get_all_workshops': {
        const workshops = await dataSources.getAllWorkshops();

        return createInteractiveTable(workshops, 'Workshops & Training');
      }

      case 'get_workshop_by_slug': {
        const slug = validateSlug(args.slug);
        const workshops = await dataSources.getAllWorkshops();
        const workshop = findBySlug(workshops, slug, 'Workshop');

        return toJSONContent(workshop);
      }

      case 'get_all_appearances': {
        const events = await dataSources.getAllEvents();

        return createInteractiveTable(events, 'Speaking Appearances');
      }

      case 'get_appearance_by_slug': {
        const slug = validateSlug(args.slug);
        const events = await dataSources.getAllEvents();
        const event = findBySlug(events, slug, 'Appearance');

        return toJSONContent(event);
      }

      case 'search_content': {
        const query = validateString(args.query, 'Query');
        const contentType = (args.contentType as string) ?? 'all';
        const loweredQuery = query.toLowerCase();
        const results: Record<string, unknown>[] = [];
        const matchesString = (value: string | undefined): boolean =>
          Boolean(value?.toLowerCase().includes(loweredQuery));
        const matchesTags = (tags: string[] | undefined): boolean =>
          Boolean(
            tags?.some((tag) => tag.toLowerCase().includes(loweredQuery)),
          );
        const matchesEntry = (entry: SearchableContent): boolean => {
          const searchableFields: string[] = [];

          // Get title or name
          if ('title' in entry) {
            searchableFields.push(entry.title);
          }

          if ('name' in entry) {
            searchableFields.push(entry.name);
          }

          // Get description fields
          if ('frontmatter' in entry && entry.frontmatter.description) {
            searchableFields.push(entry.frontmatter.description);
          }

          if ('abstract' in entry && entry.abstract) {
            searchableFields.push(entry.abstract);
          }

          if ('summary' in entry && entry.summary) {
            searchableFields.push(entry.summary);
          }

          // Check text fields or tags
          return (
            searchableFields.some(matchesString) ||
            ('tags' in entry && matchesTags(entry.tags))
          );
        };

        if (contentType === 'all' || contentType === 'posts') {
          const posts = await dataSources.getAllPosts();
          const matchingPosts = posts.filter(matchesEntry);

          results.push(
            ...matchingPosts.map((post) => ({ type: 'post', ...post })),
          );
        }

        if (contentType === 'all' || contentType === 'talks') {
          const talks = await dataSources.getAllTalks();
          const matchingTalks = talks.filter(matchesEntry);

          results.push(
            ...matchingTalks.map((talk) => ({ type: 'talk', ...talk })),
          );
        }

        if (contentType === 'all' || contentType === 'workshops') {
          const workshops = await dataSources.getAllWorkshops();
          const matchingWorkshops = workshops.filter(matchesEntry);

          results.push(
            ...matchingWorkshops.map((workshop) => ({
              type: 'workshop',
              ...workshop,
            })),
          );
        }

        return createInteractiveTable(results, `Search Results for "${query}"`);
      }

      case 'get_newsletter_stats': {
        const stats = {
          growthRate: '+12%',
          lastCampaign: {
            clickRate: '15%',
            openRate: '68%',
            sentDate: '2024-01-15',
            title: 'React 19 Updates & Performance Tips',
          },
          totalSubscribers: 1250,
          upcomingCampaigns: 2,
        };

        return toJSONContent(stats);
      }

      case 'create_newsletter_campaign': {
        const title = validateString(args.title, 'Title');
        const content = validateString(args.content, 'Content');
        const scheduledDate = args.scheduledDate as string | undefined;
        const campaign = {
          content,
          createdAt: new Date().toISOString(),
          estimatedRecipients: 1250,
          id: `campaign_${Date.now()}`,
          scheduledDate: scheduledDate ?? new Date().toISOString(),
          status: 'draft',
          title,
        };

        return toJSONContent(campaign);
      }

      default:
        throw new Error(`Unknown tool: ${toolName}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    return {
      content: [
        {
          text: `Error: ${message}`,
          type: 'text',
        },
      ],
      isError: true,
    };
  }
}
