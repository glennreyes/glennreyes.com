import { InlineLink } from '../link/inline-link';

export function SkipNavigationLink() {
  return (
    <InlineLink
      className="pointer-events-none absolute z-40 scale-95 scroll-mt-23 rounded-full bg-white px-3 py-2 font-medium text-gray-900/90 no-underline opacity-0 transition-none focus-visible:pointer-events-auto focus-visible:scale-100 focus-visible:opacity-100 dark:bg-black dark:text-gray-200"
      href="#main"
    >
      Skip to content
    </InlineLink>
  );
}
