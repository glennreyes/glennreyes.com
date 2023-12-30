/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:deprecation/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:perfectionist/recommended-natural',
    'plugin:unicorn/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@stylistic', 'unused-imports'],
  rules: {
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: ['block-like'],
        prev: '*',
      },
      {
        blankLine: 'always',
        next: ['*'],
        prev: ['block-like'],
      },
    ],
    '@stylistic/spaced-comment': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/prefer-destructuring': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNullableBoolean: true,
        allowNullableNumber: true,
        allowNullableString: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-namespace': 'error',
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-console': 'error',
    'no-constant-binary-expression': 'error',
    'no-else-return': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-rename': 'error',
    'no-warning-comments': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
    'prefer-template': 'error',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
