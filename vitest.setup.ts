import '@testing-library/jest-dom/vitest';
import * as React from 'react';
import { vi } from 'vitest';

Object.assign(globalThis, { React });

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

vi.mock('next/cache', () => ({
  cacheLife: vi.fn(),
  cacheTag: vi.fn(),
  revalidateTag: vi.fn(),
  updateTag: vi.fn(),
  unstable_cache: (fn: unknown) => fn,
}));

vi.mock('next/offline', () => ({
  useOffline: () => false,
}));
vi.mock('content-collections', () => ({
  allPosts: [],
  allPages: [],
}));
