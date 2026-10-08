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
    id: 'blue',
    src: '/media/freediving/blue.webp',
    alt: 'A freediver suspended in blue water beneath a school of fish',
    caption: 'A different kind of quiet.',
    collection: 'From the water · May 2025',
    video: '/media/freediving/blue.mp4',
  },
  {
    id: 'reef',
    src: '/media/freediving/reef.webp',
    alt: 'A freediver gliding above a coral reef in clear blue water',
    caption: 'Taking the long way back.',
    collection: 'From the water · May 2025',
  },
  {
    id: 'line',
    src: '/media/freediving/line.webp',
    alt: 'A freediver descending headfirst alongside a training line',
    caption: 'One breath. One descent.',
    collection: 'Line training · April 2026',
    video: '/media/freediving/line.mp4',
  },
  {
    id: 'descent',
    src: '/media/freediving/descent.webp',
    alt: 'Long freediving fins disappearing into open blue water',
    caption: 'Learning to slow down.',
    collection: 'Line training · April 2026',
  },
  {
    id: 'coast',
    src: '/media/freediving/coast.webp',
    alt: 'An aerial view of the Moalboal coast at sunset',
    caption: 'Back at the surface.',
    collection: 'Moalboal · June 2025',
  },
  {
    id: 'portrait',
    src: '/media/freediving/portrait.webp',
    alt: 'Glenn wearing a diving mask in clear water above a reef',
    caption: 'A place I keep coming back to.',
    collection: 'Moalboal · June 2025',
  },
]);
export const projects = [
  {
    slug: 'generative-ui',
    title: 'Generative UI with MCP',
    description:
      'A working React app, an MCP server, and a workshop about interfaces inside conversations.',
    href: 'https://github.com/glennreyes/generative-ui-mcp-workshop',
    label: 'Build & teach',
  },
  {
    slug: 'tuner',
    title: 'Tuner',
    description:
      'A small browser experiment that turns sound into something you can see.',
    href: '/posts/tuner',
    label: 'A little curiosity',
  },
  {
    slug: 'unitydive',
    title: 'Unitydive',
    description: 'Something new I’m building around freediving. More to come.',
    href: '/freediving#unitydive',
    label: 'In the making',
  },
];
export const stravaProfile = 'https://www.strava.com/athletes/14875783';
