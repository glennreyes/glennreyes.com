import type { ImageProps } from 'next/image';
import Image from 'next/image';

type PhotosSectionPhotoProps = Omit<ImageProps, 'className'>;

export function PhotosSectionPhoto({ alt, ...props }: PhotosSectionPhotoProps) {
  return (
    <div className="aspect-[15/16] w-48 min-w-[220px] md:w-[480px]">
      <Image alt={alt} className="object-cover" height={480} width={480} {...props} />
    </div>
  );
}
