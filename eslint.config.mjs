import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,

  // Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/next-env.d.ts',
      '**/pnpm-lock.yaml',
      '**/package-lock.json',
      '**/yarn.lock',
    ],
  },

  // Global rules
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      '@stylistic': stylistic,
      'unused-imports': unusedImports,
      perfectionist,
      unicorn,
      'prefer-arrow-functions': preferArrowFunctions,
    },
    rules: {
      // Custom stylistic rules
      '@stylistic/jsx-curly-brace-presence': 'error',
      '@stylistic/lines-around-comment': [
        'error',
        {
          afterHashbangComment: true,
        },
      ],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: ['block-like', 'export', 'return'],
          prev: '*',
        },
        { blankLine: 'always', next: ['*'], prev: ['block-like'] },
        {
          blankLine: 'always',
          next: ['expression'],
          prev: ['block-like', 'const'],
        },
        { blankLine: 'never', next: ['const'], prev: ['const'] },
      ],
      '@stylistic/spaced-comment': 'error',

      // React overrides
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { ignore: ['tw'] }],

      // Unused imports
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

      // Import sorting
      'perfectionist/sort-imports': [
        'error',
        { type: 'natural', order: 'asc' },
      ],

      // Unicorn overrides
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },

  // TypeScript files
  ...tseslint.config({
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: true },
      ],
      '@typescript-eslint/no-floating-promises': [
        'error',
        { ignoreIIFE: true },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowNullableBoolean: true,
          allowNullableNumber: true,
          allowNullableString: true,
        },
      ],
      'import/consistent-type-specifier-style': 'error',
      'no-console': ['error', { allow: ['error', 'warn'] }],
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-unused-vars': 'off',
      'react/prop-types': 'off',
    },
  }),
]);
