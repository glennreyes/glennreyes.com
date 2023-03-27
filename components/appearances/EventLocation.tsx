import { MapPinIcon } from '@heroicons/react/24/solid';
import type { Location } from '@prisma/client';
import { composePlaceByLocation } from '~/lib/place';

interface EventLocationProps {
  location: Pick<Location, 'city' | 'country' | 'name' | 'state'>;
}

export function EventLocation({ location }: EventLocationProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <MapPinIcon className="h-6 w-6 text-stone-300" />
      <span>
        {location.name} · {composePlaceByLocation(location)}
      </span>
    </span>
  );
}
