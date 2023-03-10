import { describe, expect, test } from 'vitest';
import fromNow from '@/utils/Alkuun';

describe('Alkuun', () => {
  test('should transform a date', () => {
    const date = '2024-02-18T08:02:00Z';
    const transformed = fromNow(date);

    // The utils should transform the date into a human string, using the `date-fns` library
    expect(transformed).toContain('in');
  });
});
