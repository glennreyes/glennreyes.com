/** @type {import('prettier').Config} */

module.exports = {
  importOrder: ['^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  pluginSearchDirs: false,
  plugins: [require('@trivago/prettier-plugin-sort-imports'), require('prettier-plugin-tailwindcss')],
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
};
