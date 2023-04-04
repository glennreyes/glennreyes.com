import { MapPinIcon } from '@heroicons/react/24/outline';
import type { Location } from '@prisma/client';
import { composeGoogleMapsUrl, composePlaceByLocation } from '~/lib/place';
import { Link } from '../ui/link/Link';

interface EventLocationProps {
  location: Pick<Location, 'address' | 'address' | 'city' | 'country' | 'name' | 'state' | 'zip'>;
}

export function EventLocation({ location }: EventLocationProps) {
  const url = composeGoogleMapsUrl(location);
  const place = composePlaceByLocation(location);

  return (
    <Link className="group inline-flex items-center gap-2" href={url}>
      <MapPinIcon className="h-6 w-6 text-slate-400 transition group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-400" />
      {location.name} · {place}
    </Link>
  );
}
