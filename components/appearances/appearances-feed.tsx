'use client';

import type { ReactNode } from 'react';

import { Calendar } from 'lucide-react';
import { useMemo } from 'react';

import type { FeedEvent } from '@/lib/events';

import { composePlaceByLocation } from '@/lib/place';

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../ui/empty';
import { Feed, FeedItem } from '../ui/layout/feed';

interface AppearancesFeedProps {
  children?: ReactNode;
  events: FeedEvent[];
}

export function AppearancesFeed({ children, events }: AppearancesFeedProps) {
  const { past, upcoming } = useMemo(() => {
    const parsed = events.map((event) => {
      const startDateObject = new Date(event.startDate);

      return {
        ...event,
        startDateObject,
        startDateTimestamp: startDateObject.getTime(),
      };
    });
    const now = Date.now();
    const upcomingEvents = parsed
      .filter((event) => event.startDateTimestamp > now)
      .sort(
        (first, second) => first.startDateTimestamp - second.startDateTimestamp,
      );
    const pastEvents = parsed
      .filter((event) => event.startDateTimestamp <= now)
      .sort(
        (first, second) => second.startDateTimestamp - first.startDateTimestamp,
      );

    return {
      past: pastEvents,
      upcoming: upcomingEvents,
    };
  }, [events]);

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
            <FeedItem
              date={event.startDateObject}
              description={composePlaceByLocation({
                city: event.location.city,
                country: event.location.country,
                state: event.location.state,
              })}
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
            <FeedItem
              date={event.startDateObject}
              description={composePlaceByLocation({
                city: event.location.city,
                country: event.location.country,
                state: event.location.state,
              })}
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
