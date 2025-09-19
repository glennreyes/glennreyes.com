import type { Metadata } from 'next';

import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { MCPContent, type MCPToolGroup } from '@/components/mcp/mcp-content';
import { Page } from '@/components/ui/layout/page';

const file = path.join(process.cwd(), 'content/pages/mcp.mdx');

const toolGroups: MCPToolGroup[] = [
  {
    badgeColor: 'teal',
    id: 'content',
    title: 'Content Management',
    tools: [
      { badge: 'get_all_posts', description: 'Get all blog posts' },
      { badge: 'get_post_by_slug', description: 'Get specific blog post' },
      { badge: 'get_all_talks', description: 'Get all talks' },
      { badge: 'get_talk_by_slug', description: 'Get specific talk' },
      { badge: 'get_all_workshops', description: 'Get all workshops' },
      { badge: 'get_workshop_by_slug', description: 'Get specific workshop' },
      { badge: 'get_all_appearances', description: 'Get all appearances' },
      { badge: 'get_appearance_by_slug', description: 'Get specific appearance' },
    ],
  },
  {
    badgeColor: 'sky',
    id: 'analytics',
    title: 'Analytics & Search',
    tools: [
      { badge: 'search_content', description: 'Search across all content' },
      { badge: 'get_content_analytics', description: 'Get analytics data' },
      { badge: 'get_newsletter_stats', description: 'Get newsletter statistics' },
      { badge: 'create_newsletter_campaign', description: 'Create newsletter' },
    ],
  },
];

export const metadata: Metadata = {
  title: 'MCP Server',
  description: 'Model Context Protocol server interface for Glenn Reyes portfolio',
};

const MCPPage = async () => {
  const source = await readFile(file, 'utf8');

  return (
    <Page>
      <Page.Header meta="Development Tools">MCP Server Interface</Page.Header>
      <Page.Body>
        <div className="mx-auto max-w-4xl space-y-8">
          <MCPContent source={source} toolGroups={toolGroups} />
        </div>
      </Page.Body>
    </Page>
  );
};

export default MCPPage;
