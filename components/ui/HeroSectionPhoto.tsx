import type { ImageProps } from 'next/image';
import Image from 'next/image';

type HeroSectionPhotoProps = Omit<ImageProps, 'className'>;

export function HeroSectionPhoto({ alt, ...props }: HeroSectionPhotoProps) {
  return <Image alt={alt} className="h-32 w-32 rounded-full shadow-2xl sm:h-40 sm:w-40 md:h-48 md:w-48" {...props} />;
}
