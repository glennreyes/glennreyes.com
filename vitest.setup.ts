import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

function Tweet() {
  return null;
}

vi.mock('react-tweet', () => ({
  Tweet,
}));

// Mock Content Collections for tests
vi.mock('content-collections', () => ({
  allPosts: [],
  allPages: [],
}));
