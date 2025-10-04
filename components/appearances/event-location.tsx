import type { Location } from '@/drizzle/schema';

import { MapPin } from 'lucide-react';

import { composeGoogleMapsUrl, composePlaceByLocation } from '@/lib/place';

import { Link } from '../ui/link/link';

interface EventLocationProps {
  location: Pick<
    Location,
    'address' | 'city' | 'country' | 'name' | 'state' | 'zip'
  >;
}

export function EventLocation({ location }: EventLocationProps) {
  const url = composeGoogleMapsUrl(location);
  const place = composePlaceByLocation(location);

  return (
    <Link className="group inline-flex items-center gap-2" href={url}>
      <MapPin
        aria-hidden
        className="h-6 w-6 text-slate-400 transition group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-400"
        strokeWidth={2}
      />
      {location.name} · {place}
    </Link>
  );
}
