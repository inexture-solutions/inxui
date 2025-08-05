import { describe, it, expect } from 'vitest';
import { RichTextEditor } from '../index';

describe('tiptap package', () => {
  it('re-exports Mantine RichTextEditor component', () => {
    expect(RichTextEditor).toBeDefined();
  });
});
