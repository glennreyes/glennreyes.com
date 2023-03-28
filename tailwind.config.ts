import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './app/**/*.{css,ts,tsx}',
    './components/**/*.{css,ts,tsx}',
    './hooks/**/*.{css,ts,tsx}',
    './icons/**/*.{css,ts,tsx}',
    './lib/**/*.{css,ts,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      container: {
        screens: {
          '2xl': '64rem',
          xl: '64rem',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', ...fontFamily.mono],
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
          },
        },
      },
    },
  },
} satisfies Config;
