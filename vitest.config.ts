import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    exclude: ['**/node_modules/**', '**/e2e/**'],
    env: {
      TURSO_DATABASE_URL: 'file:test.db',
      TURSO_AUTH_TOKEN: 'test-token',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
});
