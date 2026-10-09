import type { ReactNode } from 'react';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/elements/alert';
import { Badge } from '@/components/ui/elements/badge';
import { MDXContent } from '@/components/ui/mdx/mdx-content';
import { H2 } from '@/components/ui/typography/h2';
import { H3 } from '@/components/ui/typography/h3';

interface ToolItem {
  badge: string;
  color?: 'rose' | 'sky' | 'slate' | 'teal';
  description: string;
}

interface ToolGroup {
  badgeColor?: ToolItem['color'];
  id: string;
  title: string;
  tools: ToolItem[];
}

interface MCPContentProps {
  source: string;
}

interface ToolGridProps {
  children?: ReactNode;
}

function ToolGrid({ children }: ToolGridProps) {
  return <div className="grid gap-6">{children}</div>;
}

interface DefinitionListProps {
  children?: ReactNode;
}

function DefinitionList({ children }: DefinitionListProps) {
  return (
    <dl className="not-prose overflow-hidden rounded-3xl border border-neutral-200 bg-white/70 text-neutral-600 shadow-sm dark:border-neutral-700/80 dark:bg-neutral-800/60 dark:text-neutral-300">
      {children}
    </dl>
  );
}

interface DefinitionListItemProps {
  detail: ReactNode;
  term: string;
}

function DefinitionListItem({ detail, term }: DefinitionListItemProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-neutral-200/70 px-5 py-4 first:border-t-0 dark:border-neutral-700/60">
      <dt className="font-medium text-neutral-500 dark:text-neutral-400">
        {term}
      </dt>
      <dd className="font-medium text-neutral-950 dark:text-neutral-100">
        {detail}
      </dd>
    </div>
  );
}

const toolGroups: ToolGroup[] = [
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
      {
        badge: 'get_appearance_by_slug',
        description: 'Get specific appearance',
      },
    ],
  },
  {
    badgeColor: 'sky',
    id: 'analytics',
    title: 'Analytics & Search',
    tools: [
      { badge: 'search_content', description: 'Search across all content' },
      { badge: 'get_content_analytics', description: 'Get analytics data' },
      {
        badge: 'get_newsletter_stats',
        description: 'Get newsletter statistics',
      },
      { badge: 'create_newsletter_campaign', description: 'Create newsletter' },
    ],
  },
];

interface ToolGroupComponentProps {
  id: string;
}

function ToolGroupComponent({ id }: ToolGroupComponentProps) {
  const group = toolGroups.find((candidate) => candidate.id === id);

  if (!group) {
    return null;
  }

  return (
    <div className="grid gap-3">
      <H3>{group.title}</H3>
      <div className="grid gap-2">
        {group.tools.map(({ badge, color, description }) => (
          <div
            className="flex flex-wrap items-center gap-2 text-neutral-600 dark:text-neutral-300"
            key={badge}
          >
            <Badge color={color ?? group.badgeColor}>{badge}</Badge>
            <span>{description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MCPContent({ source }: MCPContentProps) {
  return (
    <MDXContent
      components={{
        Alert,
        AlertDescription,
        AlertTitle,
        H2,
        H3,
        DefinitionList,
        DefinitionListItem,
        ToolGrid,
        ToolGroup: ToolGroupComponent,
      }}
      source={source}
    />
  );
}
