import type { Event } from '@prisma/client';
import type { ComponentPropsWithoutRef } from 'react';
import { Lead } from '../ui/typography/Lead';
import { EventLocation } from './EventLocation';
import { EventWebsite } from './EventWebsite';

interface EventLeadProps extends Pick<Event, 'url'>, ComponentPropsWithoutRef<typeof EventLocation> {}

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
