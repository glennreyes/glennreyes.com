import { InlineLink } from '../link/inline-link';

export function SkipNavigationLink() {
  return (
    <InlineLink
      className="pointer-events-none absolute z-40 scale-95 scroll-mt-20 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900/90 no-underline opacity-0 focus-visible:pointer-events-auto focus-visible:scale-100 focus-visible:opacity-100 dark:bg-slate-950 dark:text-slate-200"
      href="#main"
    >
      Skip to content
    </InlineLink>
  );
}
