import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

function Tweet() {
  return null;
}

function Giscus() {
  return null;
}

vi.mock('react-tweet', () => ({
  Tweet,
}));

vi.mock('@giscus/react', () => ({
  default: Giscus,
}));

// Mock Content Collections for tests
vi.mock('content-collections', () => ({
  allPosts: [],
  allPages: [],
}));
