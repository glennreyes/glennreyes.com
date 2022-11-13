/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{css,ts,tsx}'],
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', ...fontFamily.sans],
      },
      fontSize: {
        base: ['1.0625rem', '1.5625rem'],
        lg: ['1.1875rem', '1.8125rem'],
        xl: ['1.3125rem', '1.9375rem'],
      },
    },
  },
};
