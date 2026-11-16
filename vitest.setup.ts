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

// jsdom does not implement the browser APIs used by the UI SDK's top layer.
HTMLElement.prototype.showPopover = function () {};
HTMLElement.prototype.hidePopover = function () {};
Element.prototype.getAnimations = () => [];
Element.prototype.scrollIntoView = function () {};
Element.prototype.checkVisibility = () => true;
vi.stubGlobal(
  'ResizeObserver',
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
);
document.head.append(
  Object.assign(document.createElement('style'), {
    textContent: '[popover] { display: block !important }',
  }),
);
