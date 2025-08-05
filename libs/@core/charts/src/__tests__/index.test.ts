import { describe, it, expect } from 'vitest';
import { AreaChart } from '../index';

describe('charts package', () => {
  it('re-exports Mantine AreaChart component', () => {
    expect(AreaChart).toBeDefined();
  });
});
