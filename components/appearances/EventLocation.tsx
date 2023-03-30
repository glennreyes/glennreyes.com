import { MapPinIcon } from '@heroicons/react/24/solid';
import type { Location } from '@prisma/client';
import { composePlaceByLocation } from '~/lib/place';
import { Link } from '../ui/link/Link';

interface EventLocationProps {
  location: Pick<Location, 'address' | 'address' | 'city' | 'country' | 'name' | 'state' | 'zip'>;
}

export function EventLocation({ location }: EventLocationProps) {
  const query = [location.name, location.address, location.city, location.state, location.zip, location.country]
    .filter(Boolean)
    .join(', ');
  const url = `https://maps.google.com/?q=${encodeURIComponent(query)}`;

  return (
    <Link className="group inline-flex items-center gap-2" href={url}>
      <MapPinIcon className="h-6 w-6 text-slate-300 transition group-hover:text-slate-400" />
      {location.name} · {composePlaceByLocation(location)}
    </Link>
  );
}
