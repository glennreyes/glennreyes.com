/** @type {import('prettier').Config} */
module.exports = {
  importOrder: ['^[./]'],
  pluginSearchDirs: false,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
};
