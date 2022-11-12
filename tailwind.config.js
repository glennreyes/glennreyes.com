/** @type {import('tailwindcss').Config} */

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
      fontSize: {
        base: ['1.063rem', '1.563rem'],
      },
    },
    fontFamily: { sans: [] },
  },
};
