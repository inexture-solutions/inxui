import { describe, it, expect } from 'vitest';
import { Dropzone } from '../index';

describe('dropzone package', () => {
  it('re-exports Mantine Dropzone component', () => {
    expect(Dropzone).toBeDefined();
  });
});
