import { NextRequest, NextResponse } from 'next/server';

import { getAllEvents } from '@/lib/events';
import { getAllPosts } from '@/lib/posts';
import { getAllTalks } from '@/lib/talks';
import { getAllWorkshops } from '@/lib/workshops';

interface MCPResponse {
  tools?: {
    name: string;
    description: string;
    inputSchema: {
      type: string;
      properties?: Record<string, unknown>;
      required?: string[];
    };
  }[];
  content?: {
    type: string;
    text: string;
  }[];
  isError?: boolean;
}

const TOOLS = [
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
];

async function handleToolCall(
  toolName: string,
  args: Record<string, unknown>,
): Promise<MCPResponse> {
  try {
    switch (toolName) {
      case 'get_all_posts': {
        const posts = await getAllPosts();

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
        const slug = args.slug as string;

        if (typeof slug !== 'string') {
          throw new Error('Slug must be a string');
        }

        const posts = await getAllPosts();
        const post = posts.find((p) => p.slug === slug);

        if (post === undefined) {
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
        const talks = await getAllTalks();

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
        const slug = args.slug as string;

        if (typeof slug !== 'string') {
          throw new Error('Slug must be a string');
        }

        const talks = await getAllTalks();
        const talk = talks.find((t) => t.slug === slug);

        if (talk === undefined) {
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
        const workshops = await getAllWorkshops();

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
        const slug = args.slug as string;

        if (typeof slug !== 'string') {
          throw new Error('Slug must be a string');
        }

        const workshops = await getAllWorkshops();
        const workshop = workshops.find((w) => w.slug === slug);

        if (workshop === undefined) {
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
        const events = await getAllEvents();

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
        const slug = args.slug as string;

        if (typeof slug !== 'string') {
          throw new Error('Slug must be a string');
        }

        const events = await getAllEvents();
        const event = events.find((e) => e.slug === slug);

        if (event === undefined) {
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
        const query = args.query as string;
        const contentType = (args.contentType as string) ?? 'all';

        if (typeof query !== 'string') {
          throw new Error('Query must be a string');
        }

        const results: Record<string, unknown>[] = [];

        if (contentType === 'all' || contentType === 'posts') {
          const posts = await getAllPosts();
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
          const talks = await getAllTalks();
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
          const workshops = await getAllWorkshops();
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
        const title = args.title as string;
        const content = args.content as string;
        const scheduledDate = args.scheduledDate as string | undefined;

        if (typeof title !== 'string' || typeof content !== 'string') {
          throw new Error('Title and content must be strings');
        }

        const campaign = {
          id: `campaign_${Date.now()}`,
          title,
          content,
          scheduledDate: scheduledDate ?? new Date().toISOString(),
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
        throw new Error(`Unknown tool: ${toolName}`);
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
}

export function GET(): NextResponse {
  const info = {
    name: 'glennreyes-portfolio',
    version: '1.0.0',
    description: 'MCP server for Glenn Reyes portfolio management',
    endpoint: '/mcp',
    tools: TOOLS,
  };

  return NextResponse.json(info);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as {
      method: string;
      params?: {
        name?: string;
        arguments?: Record<string, unknown>;
      };
    };

    if (body.method === 'tools/list') {
      return NextResponse.json({ tools: TOOLS });
    }

    if (body.method === 'tools/call') {
      const toolName = body.params?.name;
      const args = body.params?.arguments ?? {};

      if (typeof toolName !== 'string') {
        return NextResponse.json(
          { error: 'Tool name must be provided' },
          { status: 400 },
        );
      }

      const response = await handleToolCall(toolName, args);

      return NextResponse.json(response);
    }

    return NextResponse.json(
      { error: 'Unsupported method' },
      { status: 400 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}
