import { z } from 'zod';
export const mediaSchema = z.object({
  id: z.string(),
  src: z.string().startsWith('/media/'),
  alt: z.string().min(1),
  caption: z.string().min(1),
  collection: z.string(),
  video: z.string().startsWith('/media/').optional(),
});
export type SiteMedia = z.infer<typeof mediaSchema>;
export const freedivingMedia = z.array(mediaSchema).parse([
  {
    id: 'cave',
    src: '/media/freediving/cave.webp',
    alt: 'A freediver floating between rock walls beneath a school of fish',
    caption: 'Below the surface.',
    collection: 'Freediving',
  },
  {
    id: 'nofins',
    src: '/media/freediving/nofins.webp',
    alt: 'A freediver swimming without fins in open blue water at Napaling',
    caption: 'No fins. One breath.',
    collection: 'Napaling · August 2026',
    video: '/media/freediving/nofins.mp4',
  },
  {
    id: 'sardines',
    src: '/media/freediving/sardines.webp',
    alt: 'A freediver surrounded by a swirling school of sardines',
    caption: 'In good company.',
    collection: 'Freediving',
  },
  {
    id: 'surface',
    src: '/media/freediving/surface.webp',
    alt: 'Glenn at the waterline below a rocky coastline',
    caption: 'Between two worlds.',
    collection: 'Freediving',
  },
  {
    id: 'shoal',
    src: '/media/freediving/shoal.webp',
    alt: 'A close view of a dense school of fish underwater',
    caption: 'A closer look.',
    collection: 'From the water',
    video: '/media/freediving/shoal.mp4',
  },
  {
    id: 'coast',
    src: '/media/freediving/coast.webp',
    alt: 'An aerial view of the Moalboal coast at sunset',
    caption: 'Back at the surface.',
    collection: 'Moalboal · June 2025',
  },
]);
export const projects = [
  {
    slug: 'generative-ui',
    title: 'Generative UI with MCP',
    description: 'React, MCP, and interfaces inside conversations.',
    href: 'https://github.com/glennreyes/generative-ui-mcp-workshop',
    label: 'Build & teach',
  },
  {
    slug: 'tuner',
    title: 'Tuner',
    description: 'Sound, made visible in the browser.',
    href: '/posts/tuner',
    label: 'A little curiosity',
  },
  {
    slug: 'unitydive',
    title: 'Unitydive',
    description: 'A new freediving project. In the making.',
    href: '/freediving#unitydive',
    label: 'In the making',
  },
];
export const stravaProfile = 'https://www.strava.com/athletes/14875783';
