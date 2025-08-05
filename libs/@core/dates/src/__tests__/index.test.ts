import { describe, it, expect } from 'vitest';
import { DatePicker } from '../index';

describe('dates package', () => {
  it('re-exports Mantine DatePicker component', () => {
    expect(DatePicker).toBeDefined();
  });
});
