import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['**/node_modules/**', '**/e2e/**'],
    env: {
      TURSO_DATABASE_URL: 'file:test.db',
      TURSO_AUTH_TOKEN: 'test-token',
    },
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, '.'),
      'content-collections': resolve(
        import.meta.dirname,
        '__mocks__/content-collections.ts',
      ),
    },
  },
  ssr: {
    noExternal: ['react-tweet'],
  },
});
