import type { Location } from '@prisma/client';

import { composeGoogleMapsUrl, composePlaceByLocation } from '@/lib/place';
import { MapPinIcon } from '@heroicons/react/24/outline';

import { Link } from '../ui/link/link';

interface EventLocationProps {
  location: Pick<
    Location,
    'address' | 'city' | 'country' | 'name' | 'state' | 'zip'
  >;
}

export const EventLocation = ({ location }: EventLocationProps) => {
  const url = composeGoogleMapsUrl(location);
  const place = composePlaceByLocation(location);

  return (
    <Link className="group inline-flex items-center gap-2" href={url}>
      <MapPinIcon
        aria-hidden
        className="h-6 w-6 text-slate-400 transition group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-400"
      />
      {location.name} · {place}
    </Link>
  );
};
