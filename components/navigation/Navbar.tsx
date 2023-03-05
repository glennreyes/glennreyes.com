import { Navbar as NavbarBase } from '../ui/navbar/Navbar';
import { NavbarLink } from '../ui/navbar/NavbarLink';

export function Navbar() {
  return (
    <NavbarBase>
      <NavbarLink href="/posts">Posts</NavbarLink>
      <NavbarLink href="/speaking">Speaking</NavbarLink>
      <NavbarLink href="/workshops">Workshops</NavbarLink>
      <NavbarLink href="/journal">Journal</NavbarLink>
      <NavbarLink href="/about">About</NavbarLink>
    </NavbarBase>
  );
}
