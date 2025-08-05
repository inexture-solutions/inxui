import { describe, it, expect } from 'vitest';
import { CodeHighlight } from '../index';

describe('highlight package', () => {
  it('re-exports Mantine CodeHighlight component', () => {
    expect(CodeHighlight).toBeDefined();
  });
});
