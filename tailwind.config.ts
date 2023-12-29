import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './app/**/*.{css,ts,tsx}',
    './components/**/*.{css,ts,tsx}',
    './hooks/**/*.{css,ts,tsx}',
    './icons/**/*.{css,ts,tsx}',
    './lib/**/*.{css,ts,tsx}',
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [containerQueries, forms, typography],
  theme: {
    extend: {
      container: {
        screens: {
          '2xl': '64rem',
          lg: '48rem',
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
