import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from '../ui/link/Link';

export function BackLink() {
  return (
    <Link
      aria-label="Back to posts"
      className="group inline-flex rounded-full border border-slate-100 p-3 transition hover:border-slate-300 focus-visible:border-slate-300"
      href="/posts"
    >
      <ArrowLeftIcon aria-hidden className="h-4 w-4 text-slate-500 hover:text-slate-600 focus-visible:text-slate-600" />
    </Link>
  );
}
