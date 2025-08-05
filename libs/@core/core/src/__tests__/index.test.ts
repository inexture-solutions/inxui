import { describe, it, expect } from 'vitest';
import { Button, useDisclosure } from '../index';
import type { MantineRadius } from '../index';

describe('core package', () => {
  it('re-exports Mantine components, hooks, and types', () => {
    const radius: MantineRadius = 'sm';
    expect(radius).toBe('sm');
    expect(Button).toBeDefined();
    expect(useDisclosure).toBeDefined();
  });
});
