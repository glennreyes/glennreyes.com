import type { Location } from '@prisma/client';

export function composePlaceByLocation(location: Pick<Location, 'city' | 'country' | 'state'>) {
  return [
    location.city,
    location.country === 'United States' ? location.state ?? location.country : location.country,
  ].join(', ');
}
