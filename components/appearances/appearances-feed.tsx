import type { ReactNode } from 'react';

import { Calendar } from 'lucide-react';

import type { Event, Location } from '@/drizzle/schema';

import { composePlaceByLocation } from '@/lib/place';

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../ui/empty';
import { Feed } from '../ui/layout/feed';

interface AppearancesFeedProps {
  children?: ReactNode;
  events: (Pick<Event, 'name' | 'slug' | 'startDate'> & {
    location: Pick<Location, 'city' | 'country' | 'state'>;
  })[];
}

export function AppearancesFeed({ children, events }: AppearancesFeedProps) {
  const today = new Date();
  const upcoming = events
    .filter((event) => {
      const startDate = new Date(event.startDate);

      return startDate > today;
    })
    .sort((a, b) => {
      const aDate = new Date(a.startDate);
      const bDate = new Date(b.startDate);

      return aDate.getTime() - bDate.getTime();
    });
  const past = events
    .filter((event) => {
      const startDate = new Date(event.startDate);

      return startDate <= today;
    })
    .sort((a, b) => {
      const aDate = new Date(a.startDate);
      const bDate = new Date(b.startDate);

      return bDate.getTime() - aDate.getTime();
    });

  if (events.length === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Calendar />
          </EmptyMedia>
          <EmptyTitle>No appearances yet</EmptyTitle>
          <EmptyDescription>
            Check back later for upcoming speaking and teaching engagements.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="not-prose grid gap-12">
      {upcoming.length > 0 && (
        <Feed title="Upcoming">
          {upcoming.map((event) => (
            <Feed.Item
              date={event.startDate}
              description={composePlaceByLocation(event.location)}
              key={event.slug}
              link={`/appearances/${event.slug}`}
              title={event.name}
            />
          ))}
        </Feed>
      )}
      {past.length > 0 && (
        <Feed title="Past">
          {past.map((event) => (
            <Feed.Item
              date={event.startDate}
              description={composePlaceByLocation(event.location)}
              key={event.slug}
              link={`/appearances/${event.slug}`}
              title={event.name}
            />
          ))}
        </Feed>
      )}
      {children}
    </div>
  );
}
