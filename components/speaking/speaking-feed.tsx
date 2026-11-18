import type { Talk, Workshop } from '@/drizzle/schema';

import { Feed, FeedItem } from '@/components/ui/layout/feed';
import { MDXContent } from '@/components/ui/mdx/mdx-content';

type SpeakingFeedProps =
  | {
      kind: 'Talks';
      sessions: Pick<Talk, 'abstract' | 'slug' | 'status' | 'title'>[];
    }
  | {
      kind: 'Workshops';
      sessions: Pick<Workshop, 'summary' | 'slug' | 'status' | 'title'>[];
    };

export function SpeakingFeed({ kind, sessions }: SpeakingFeedProps) {
  const groups = [
    {
      title: 'Current',
      description: `${kind} I'm currently giving or have upcoming.`,
      items: sessions.filter((session) => session.status === 'ACTIVE'),
    },
    {
      title: 'Past',
      description: `${kind} I've given in the past.`,
      items: sessions.filter((session) => session.status === 'INACTIVE'),
    },
  ];

  return (
    <div className="not-prose grid gap-12">
      {groups
        .filter((group) => group.items.length > 0)
        .map((group) => (
          <Feed
            key={group.title}
            title={group.title}
            description={group.description}
          >
            {group.items.map((session) => (
              <FeedItem
                key={session.slug}
                title={session.title}
                action={kind === 'Talks' ? 'Talk Details' : 'Workshop Details'}
                link={`/${kind.toLowerCase()}/${session.slug}`}
                description={
                  <div className="prose prose-slate text-neutral-500">
                    <MDXContent
                      source={
                        'abstract' in session
                          ? session.abstract
                          : session.summary
                      }
                    />
                  </div>
                }
              />
            ))}
          </Feed>
        ))}
    </div>
  );
}
