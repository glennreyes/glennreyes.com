import { SunIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import photo from '~/assets/images/photo.jpg';
import { name } from '~/lib/constants';
import { Container } from '../layout/Container';

type NavbarProps = Omit<ComponentPropsWithoutRef<'nav'>, 'className'>;

export function Navbar(props: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 bg-white/75 supports-[backdrop-filter]:backdrop-blur-md">
      <Container>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex-1">
            <Link href="/">
              <Image alt={name} className="h-10 w-10 rounded-full border-2 border-stone-200" src={photo} />
            </Link>
          </div>
          <nav className="flex flex-1 justify-end gap-2 py-4 md:justify-center md:gap-4" {...props} />
          <div className="flex justify-end md:flex-1">
            <SunIcon className="h-5 w-5 text-stone-400" />
          </div>
        </div>
      </Container>
    </header>
  );
}
