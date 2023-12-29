import type { Location } from '@prisma/client';

export function composePlaceByLocation(
  location: Pick<Location, 'city' | 'country' | 'state'>,
) {
  return [
    location.city,
    location.country === 'United States'
      ? location.state ?? location.country
      : location.country,
  ].join(', ');
}

export function composeGoogleMapsUrl(
  location: Pick<
    Location,
    'address' | 'city' | 'country' | 'name' | 'state' | 'zip'
  >,
) {
  const query = [
    location.name,
    location.address,
    location.city,
    location.state,
    location.zip,
    location.country,
  ]
    .filter(Boolean)
    .join(', ');

  return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
}
