import type { Workshop } from '@prisma/client';
import type { ReactNode } from 'react';

import { Feed } from '../ui/layout/feed';
import { MDXContent } from '../ui/mdx/mdx-content';

interface WorkshopsFeedProps {
  children?: ReactNode;
  workshops: Pick<Workshop, 'slug' | 'status' | 'summary' | 'title'>[];
}

export const WorkshopsFeed = ({ children, workshops }: WorkshopsFeedProps) => {
  const active = workshops.filter((workshop) => workshop.status === 'ACTIVE');
  const inactive = workshops.filter(
    (workshop) => workshop.status === 'INACTIVE',
  );

  return (
    <div className="not-prose grid gap-12">
      {active.length > 0 && (
        <Feed
          description="Workshops I'm currently giving or have upcoming."
          title="Current"
        >
          {active.map(({ slug, summary, title }) => (
            <Feed.Item
              action="Workshop Details"
              description={
                <div className="prose prose-slate text-slate-500">
                  <MDXContent source={summary} />
                </div>
              }
              key={slug}
              link={`/workshops/${slug}`}
              title={title}
            />
          ))}
        </Feed>
      )}
      {inactive.length > 0 && (
        <Feed description="Workshops I've given in the past." title="Past">
          {inactive.map(({ slug, summary, title }) => (
            <Feed.Item
              action="Workshop Details"
              description={
                <div className="prose prose-slate text-slate-500">
                  <MDXContent source={summary} />
                </div>
              }
              key={slug}
              link={`/workshops/${slug}`}
              title={title}
            />
          ))}
        </Feed>
      )}
      {children}
    </div>
  );
};
