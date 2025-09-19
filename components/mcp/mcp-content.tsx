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
  toolGroups: ToolGroup[];
}

export function MCPContent({ source, toolGroups }: MCPContentProps) {
  const groups = new Map(toolGroups.map((group) => [group.id, group]));
  const ToolGrid = ({ children }: { children?: ReactNode }) => (
    <div className="grid gap-6">{children}</div>
  );
  const DefinitionList = ({ children }: { children?: ReactNode }) => (
    <dl className="not-prose overflow-hidden rounded-3xl border border-slate-200 bg-white/70 text-slate-600 shadow-sm dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-300">
      {children}
    </dl>
  );
  const DefinitionListItem = ({
    detail,
    term,
  }: {
    detail: ReactNode;
    term: string;
  }) => (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-slate-200/70 px-5 py-4 first:border-t-0 dark:border-slate-700/60">
      <dt className="font-medium text-slate-500 dark:text-slate-400">{term}</dt>
      <dd className="font-medium text-slate-950 dark:text-slate-100">
        {detail}
      </dd>
    </div>
  );
  const ToolGroupComponent = ({ id }: { id: string }) => {
    const group = groups.get(id);

    if (!group) {
      return null;
    }

    return (
      <div className="grid gap-3">
        <H3>{group.title}</H3>
        <div className="grid gap-2">
          {group.tools.map(({ badge, color, description }) => (
            <div
              className="flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-300"
              key={badge}
            >
              <Badge color={color ?? group.badgeColor}>{badge}</Badge>
              <span>{description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

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

export type { ToolGroup as MCPToolGroup };
