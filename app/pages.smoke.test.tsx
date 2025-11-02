import { render } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';

import AboutPage from './about/page';
import AppearanceSlugPage from './appearances/[slug]/page';
import AppearancesPage from './appearances/page';
import LegalPage from './legal/page';
import McpAboutPage from './mcp/about/page';
import RootPage from './page';
import PostSlugPage from './posts/[slug]/page';
import PostsPage from './posts/page';
import PrivacyPage from './privacy/page';
import SubscribeConfirmPage from './subscribe/confirm/page';
import SubscribeThankYouPage from './subscribe/thank-you/page';
import TalkSlugPage from './talks/[slug]/page';
import TalksPage from './talks/page';
import UsesPage from './uses/page';
import WorkshopSlugPage from './workshops/[slug]/page';
import WorkshopsPage from './workshops/page';

vi.mock('@/lib/events', () => ({
  getAllEvents: vi.fn().mockResolvedValue([
    {
      name: 'Test Event',
      slug: 'test-event',
      startDate: new Date('2025-12-01'),
      location: {
        city: 'Test City',
        country: 'Test Country',
        state: null,
      },
    },
  ]),
  getEventBySlug: vi.fn().mockResolvedValue({
    name: 'Test Event',
    slug: 'test-event',
    startDate: new Date('2025-12-01'),
    endDate: new Date('2025-12-02'),
    url: 'https://test.com',
    location: {
      city: 'Test City',
      country: 'Test Country',
      state: null,
      name: 'Test Venue',
      address: '123 Test St',
      zip: '12345',
    },
    appearances: [],
  }),
  mapEventsToFeed: vi.fn((events) =>
    events.map((event: { name: string; slug: string; startDate: Date | string; location: { city: string | null; country: string | null; state: string | null } }) => ({
      name: event.name,
      slug: event.slug,
      startDate:
        event.startDate instanceof Date
          ? event.startDate.toISOString()
          : new Date(event.startDate).toISOString(),
      location: {
        city: event.location.city ?? '',
        country: event.location.country ?? '',
        state: event.location.state,
      },
    })),
  ),
  getCurrentTimestamp: vi
    .fn()
    .mockResolvedValue(new Date('2024-01-01').getTime()),
}));

vi.mock('@/lib/talks', () => ({
  getAllTalks: vi.fn().mockResolvedValue([
    {
      title: 'Test Talk',
      slug: 'test-talk',
      abstract: 'Test abstract',
      tags: ['react'],
    },
  ]),
  getTalkBySlug: vi.fn().mockResolvedValue({
    title: 'Test Talk',
    slug: 'test-talk',
    abstract: 'Test abstract',
    tags: ['react'],
    slides: 'https://slides.com/test',
    appearances: [],
  }),
}));

vi.mock('@/lib/workshops', () => ({
  getAllWorkshops: vi.fn().mockResolvedValue([
    {
      title: 'Test Workshop',
      slug: 'test-workshop',
      summary: 'Test summary',
      tags: ['react'],
    },
  ]),
  getWorkshopBySlug: vi.fn().mockResolvedValue({
    title: 'Test Workshop',
    slug: 'test-workshop',
    summary: 'Test summary',
    description: 'Test description',
    tags: ['react'],
    appearances: [],
  }),
}));

vi.mock('@/lib/posts', () => ({
  getAllPosts: vi.fn().mockResolvedValue([
    {
      frontmatter: {
        title: 'Test Post',
        description: 'Test description',
        date: '2025-01-01',
        publishedAt: '2025-01-01',
      },
      slug: 'test-post',
      content: <div>Test content</div>,
      readingTime: 5,
    },
  ]),
  getAllPublishedPosts: vi.fn().mockResolvedValue([
    {
      frontmatter: {
        title: 'Test Post',
        description: 'Test description',
        date: '2025-01-01',
      },
      slug: 'test-post',
      content: <div>Test content</div>,
    },
  ]),
  getPostBySlug: vi.fn().mockResolvedValue({
    frontmatter: {
      title: 'Test Post',
      description: 'Test description',
      slug: 'test-post',
      date: '2025-01-01',
      image: '/test.png',
    },
    content: <div>Test content</div>,
    readingTime: 5,
  }),
}));

vi.mock('@/lib/mdx/read-mdx-file', () => ({
  readMDXFile: vi.fn().mockResolvedValue({
    content: <div>Test MDX Content</div>,
    frontmatter: {
      title: 'Test Title',
      heading: 'Test Heading',
      lead: 'Test Lead',
    },
  }),
  mdxRemoteOptions: {},
}));

vi.mock('next/image', () => ({
  default: ({
    alt,
    priority,
    placeholder,
    ...props
  }: {
    alt: string;
    priority?: boolean;
    placeholder?: string;
  }) => <img alt={alt} {...props} />,
}));

vi.mock('@/lib/hooks/use-theme', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

vi.mock('@/lib/hooks/use-intersection', () => ({
  useIntersection: () => ({ ref: { current: null } }),
}));

vi.mock('react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react')>();

  return {
    ...actual,
    ViewTransition: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    unstable_ViewTransition: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
  };
});

vi.mock('@/app/subscribe/action', () => ({
  subscribe: vi.fn(),
}));

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/test',
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error('NEXT_HTTP_ERROR_FALLBACK;404');
  },
}));

describe('Page Smoke Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Static Pages', () => {
    it('renders home page', async () => {
      const { container, findByText } = render(<RootPage />);

      await findByText(/Hello, I'm/i);
      expect(container.textContent).toBeTruthy();
    });

    it('renders about page', async () => {
      const { container } = render(await AboutPage());

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders appearances page', async () => {
      const { container } = render(await AppearancesPage());

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders legal page', async () => {
      const { container } = render(await LegalPage());

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders mcp about page', async () => {
      const { container } = render(await McpAboutPage());

      expect(container).toBeInTheDocument();
    });

    it('renders posts page', () => {
      const { container } = render(<PostsPage />);

      expect(container).toBeInTheDocument();
    });

    it('renders privacy page', async () => {
      const { container } = render(await PrivacyPage());

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders subscribe confirm page', async () => {
      const { container } = render(await SubscribeConfirmPage());

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders subscribe thank you page', async () => {
      const { container } = render(await SubscribeThankYouPage());

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders talks page', async () => {
      const { container } = render(await TalksPage());

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders uses page', async () => {
      const { container } = render(await UsesPage());

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders workshops page', async () => {
      const { container } = render(await WorkshopsPage());

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });
  });

  describe('Dynamic Pages', () => {
    it('renders appearance detail page', async () => {
      const { container } = render(
        await AppearanceSlugPage({
          params: Promise.resolve({ slug: 'test-event' }),
          searchParams: Promise.resolve({}),
        }),
      );

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders post detail page', async () => {
      const { container } = render(
        await PostSlugPage({
          params: Promise.resolve({ slug: 'test-post' }),
          searchParams: Promise.resolve({}),
        }),
      );

      expect(container).toBeInTheDocument();
      expect(container.textContent).toBeTruthy();
    });

    it('renders talk detail page', async () => {
      const { container } = render(
        await TalkSlugPage({
          params: Promise.resolve({ slug: 'test-talk' }),
          searchParams: Promise.resolve({}),
        }),
      );

      expect(container).toBeInTheDocument();
    });

    it('renders workshop detail page', async () => {
      const { container } = render(
        await WorkshopSlugPage({
          params: Promise.resolve({ slug: 'test-workshop' }),
          searchParams: Promise.resolve({}),
        }),
      );

      expect(container).toBeInTheDocument();
    });
  });
});
