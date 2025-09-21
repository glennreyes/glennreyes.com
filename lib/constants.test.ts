import { describe, it, expect } from 'vitest';

import {
  name,
  description,
  x,
  github,
  linkedin,
  instagram,
  email,
  origin,
} from './constants';

describe('constants', () => {
  it('exports basic information', () => {
    expect(name).toBe('Glenn Reyes');
    expect(description).toContain('Software engineer, tech speaker');
    expect(email).toBe('glenn@glennreyes.com');
  });

  it('exports social media handles', () => {
    expect(x).toBe('glnnrys');
    expect(github).toBe('glennreyes');
    expect(linkedin).toBe('glnnrys');
    expect(instagram).toBe('glnnrys');
  });

  it('exports origin based on environment', () => {
    // Test the current environment origin (dynamic based on NODE_ENV)
    expect(origin).toMatch(/^https?:\/\//);
    expect(origin).toMatch(/(glennreyes\.com|localhost:3000)/);
  });
});
