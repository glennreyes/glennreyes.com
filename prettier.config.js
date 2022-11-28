/** @type {import('prettier').Config} */

module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports'), require('prettier-plugin-tailwindcss')],
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
};
