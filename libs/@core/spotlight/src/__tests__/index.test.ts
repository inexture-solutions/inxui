import { describe, it, expect } from 'vitest';
import { Spotlight } from '../index';

describe('spotlight package', () => {
  it('re-exports Mantine Spotlight component', () => {
    expect(Spotlight).toBeDefined();
  });
});
