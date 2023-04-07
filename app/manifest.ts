import androidChrome192 from '~/assets/favicon/android-chrome-192x192.png';
import androidChrome512 from '~/assets/favicon/android-chrome-512x512.png';
import { description, name } from '~/lib/constants';

export default function manifest() {
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