/** @type {import('eslint').Linter.BaseConfig} */

module.exports = {
  extends: ['next/core-web-vitals', 'banana/react'],
  parserOptions: { project: './tsconfig.json' },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
