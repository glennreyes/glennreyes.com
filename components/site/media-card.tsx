import Image from 'next/image';
import type { SiteMedia } from '@/lib/site-content';
import { cn } from '@/lib/utils';
interface MediaCardProps {
  media: SiteMedia;
  priority?: boolean;
  className?: string;
  showCaption?: boolean;
}
export function MediaCard({
  media,
  priority = false,
  className,
  showCaption = true,
}: MediaCardProps) {
  return (
    <figure
      className={cn(
        'group relative isolate overflow-hidden rounded-md bg-black',
        className,
      )}
    >
      <Image
        alt={media.alt}
        className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, 60vw"
        src={media.src}
      />
      {showCaption ? (
        <>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 grid gap-1 p-7 text-white md:p-9">
            <span>{media.caption}</span>
            <span className="text-white/80">{media.collection}</span>
          </figcaption>
        </>
      ) : null}
    </figure>
  );
}
