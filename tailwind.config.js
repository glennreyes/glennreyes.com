const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{css,ts,tsx}', './components/**/*.{css,ts,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
};
