import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

function Tweet() {
  return null;
}

vi.mock('react-tweet', () => ({
  Tweet,
}));
