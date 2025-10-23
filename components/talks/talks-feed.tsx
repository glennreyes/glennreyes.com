import type { ReactNode } from 'react';

import type { Talk } from '@/drizzle/schema';

import { Feed, FeedItem } from '../ui/layout/feed';
import { MDXContent } from '../ui/mdx/mdx-content';

interface TalksFeedProps {
  children?: ReactNode;
  talks: Pick<Talk, 'abstract' | 'slug' | 'status' | 'title'>[];
}

export function TalksFeed({ children, talks }: TalksFeedProps) {
  const active = talks.filter((talk) => talk.status === 'ACTIVE');
  const inactive = talks.filter((talk) => talk.status === 'INACTIVE');

  return (
    <div className="not-prose grid gap-12">
      {active.length > 0 && (
        <Feed
          description="Talks I'm currently giving or have upcoming."
          title="Current"
        >
          {active.map(({ abstract, slug, title }) => (
            <FeedItem
              action="Talk Details"
              description={
                <div className="prose prose-slate text-slate-500">
                  <MDXContent source={abstract} />
                </div>
              }
              key={slug}
              link={`/talks/${slug}`}
              title={title}
            />
          ))}
        </Feed>
      )}
      {inactive.length > 0 && (
        <Feed description="Talks I've given in the past." title="Past">
          {inactive.map(({ abstract, slug, title }) => (
            <FeedItem
              action="Talk Details"
              description={
                <div className="prose prose-slate text-slate-500">
                  <MDXContent source={abstract} />
                </div>
              }
              key={slug}
              link={`/talks/${slug}`}
              title={title}
            />
          ))}
        </Feed>
      )}
      {children}
    </div>
  );
}
