import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/__tests__/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      lines: 95,
      functions: 95,
      branches: 95,
      statements: 95,
      include: ['src/**/*.ts'],
      exclude: ['src/types.ts']
    },
  },
});
