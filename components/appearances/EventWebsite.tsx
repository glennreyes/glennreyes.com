import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import type { Event } from '@prisma/client';
import { Link } from '../ui/elements/Link';

type EventWebsiteProps = Pick<Event, 'url'>;

export function EventWebsite({ url }: EventWebsiteProps) {
  const website = new URL(url).hostname;

  return (
    <Link className="group inline-flex items-center gap-2" href={url}>
      <ArrowTopRightOnSquareIcon className="h-6 w-6 text-stone-300 transition group-hover:text-stone-400" />
      {website}
    </Link>
  );
}
