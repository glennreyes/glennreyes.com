import type { Location } from '@/drizzle/schema';

export const composePlaceByLocation = (
  location: Pick<Location, 'city' | 'country' | 'state'>,
) =>
  [
    location.city,
    location.country === 'United States'
      ? (location.state ?? location.country)
      : location.country,
  ].join(', ');

export const composeGoogleMapsUrl = (
  location: Pick<
    Location,
    'address' | 'city' | 'country' | 'name' | 'state' | 'zip'
  >,
) => {
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
};
