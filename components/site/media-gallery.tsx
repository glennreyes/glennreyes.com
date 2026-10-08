'use client';
import Image from 'next/image';
import { Play, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { SiteMedia } from '@/lib/site-content';
interface MediaGalleryProps {
  items: SiteMedia[];
}
export function MediaGallery({ items }: MediaGalleryProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((media) => (
        <Dialog key={media.id}>
          <div className="grid gap-4">
            <DialogTrigger asChild>
              <button
                aria-label={'Open ' + media.collection + ': ' + media.caption}
                className="group aspect-portrait bg-muted relative overflow-hidden rounded-4xl focus-visible:outline-2 focus-visible:outline-offset-4"
                type="button"
              >
                <Image
                  alt={media.alt}
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  src={media.src}
                />
                <span className="absolute right-5 bottom-5 grid size-11 place-items-center rounded-full bg-black text-white">
                  {media.video !== undefined ? (
                    <Play aria-hidden="true" className="size-4" />
                  ) : (
                    <Plus aria-hidden="true" className="size-4" />
                  )}
                </span>
              </button>
            </DialogTrigger>
            <div className="grid gap-1 px-2">
              <p>{media.caption}</p>
              <p className="text-muted-foreground">{media.collection}</p>
            </div>
          </div>
          <DialogContent className="max-h-dialog overflow-y-auto sm:max-w-3xl">
            <DialogTitle>{media.caption}</DialogTitle>
            <DialogDescription>{media.collection}</DialogDescription>
            {media.video !== undefined ? (
              <video
                aria-label={media.alt}
                className="max-h-gallery w-full rounded-2xl bg-black"
                controls
                playsInline
                poster={media.src}
                preload="none"
              >
                <source src={media.video} type="video/mp4" />
                Your browser does not support this film.
              </video>
            ) : (
              <div className="sm:h-gallery relative h-80">
                <Image
                  alt={media.alt}
                  className="rounded-2xl object-contain"
                  fill
                  sizes="80vw"
                  src={media.src}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
