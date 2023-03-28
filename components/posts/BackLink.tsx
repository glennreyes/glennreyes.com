import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from '../ui/elements/Link';

export function BackLink() {
  return (
    <Link
      aria-label="Back to posts"
      className="group absolute inline-flex rounded-full border border-stone-100 p-3 transition hover:border-stone-300 focus-visible:border-stone-300"
      href="/posts"
    >
      <ArrowLeftIcon aria-hidden className="h-4 w-4 text-stone-500 hover:text-stone-600 focus-visible:text-stone-600" />
    </Link>
  );
}
