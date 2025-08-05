import { describe, it, expect } from 'vitest';
import { Carousel } from '../index';

describe('carousel package', () => {
  it('re-exports Mantine Carousel component', () => {
    expect(Carousel).toBeDefined();
  });
});
