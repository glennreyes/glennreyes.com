import { Navbar as NavbarBase } from '~/components/ui/navbar/Navbar';
import { NavbarLink } from '~/components/ui/navbar/NavbarLink';

export function Navbar() {
  return (
    <NavbarBase>
      <NavbarLink href="/about">About</NavbarLink>
      <NavbarLink href="/posts">Posts</NavbarLink>
      <NavbarLink href="/appearances">Appearances</NavbarLink>
    </NavbarBase>
  );
}
