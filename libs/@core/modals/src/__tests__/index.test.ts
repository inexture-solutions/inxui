import { describe, it, expect } from 'vitest';
import { ModalsProvider } from '../index';

describe('modals package', () => {
  it('re-exports Mantine ModalsProvider component', () => {
    expect(ModalsProvider).toBeDefined();
  });
});
