import type { Event } from '@prisma/client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

import { Link } from '../ui/link/link';

type EventWebsiteProps = Pick<Event, 'url'>;

export function EventWebsite({ url }: EventWebsiteProps) {
  const website = new URL(url).hostname;

  return (
    <Link className="group inline-flex items-center gap-2" href={url}>
      <ArrowTopRightOnSquareIcon
        aria-hidden
        className="h-6 w-6 text-slate-400 transition group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-400"
      />
      {website}
    </Link>
  );
}
