import { description, name } from '~/lib/constants';
import androidChrome192 from './android-chrome-192x192.png';
import androidChrome512 from './android-chrome-512x512.png';

export default async function manifest() {
  return {
    description,
    display: 'standalone',
    icons: [
      {
        sizes: '192x192',
        src: androidChrome192.src,
        type: 'image/png',
      },
      {
        sizes: '512x512',
        src: androidChrome512.src,
        type: 'image/png',
      },
    ],
    name,
    short_name: name,
  };
}
