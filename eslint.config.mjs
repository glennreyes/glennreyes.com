import baseConfig from '@glennreyes/eslint-config';
import storybook from 'eslint-plugin-storybook';

export default [
  ...baseConfig,
  ...storybook.configs['flat/recommended'],
  {
    ignores: ['storybook-static/**', '.content-collections/**'],
  },
];
