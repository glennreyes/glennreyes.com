import type { ComponentPropsWithoutRef } from 'react';

import type { Event } from '@/drizzle/schema';

import { Lead } from '../ui/typography/lead';
import { EventLocation } from './event-location';
import { EventWebsite } from './event-website';

interface EventLeadProps
  extends Pick<Event, 'url'>, ComponentPropsWithoutRef<typeof EventLocation> {}

export function EventLead({ location, url }: EventLeadProps) {
  return (
    <Lead>
      <span className="flex flex-wrap items-center gap-6">
        <EventLocation location={location} />
        <EventWebsite url={url} />
      </span>
    </Lead>
  );
}
