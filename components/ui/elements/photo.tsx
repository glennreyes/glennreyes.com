import type { ImageProps } from 'next/image';

import Image from 'next/image';

type PhotoProps = Omit<ImageProps, 'className'>;

export const Photo = ({ alt, ...props }: PhotoProps) => <Image
      alt={alt}
      className="h-32 w-32 rounded-full shadow-2xl sm:h-40 sm:w-40 md:h-48 md:w-48"
      height={512}
      width={512}
      {...props}
    />;
