import { useIsScrollTop } from '../../hooks/useIsScrollTop';
import { Navbar as NavbarBase } from '../ui/Navbar';
import { NavbarLink } from '../ui/NavbarLink';

export function Navbar() {
  const isScrollTop = useIsScrollTop();

  return (
    <NavbarBase isScrollTop={isScrollTop}>
      <NavbarLink href="/posts">Posts</NavbarLink>
      <NavbarLink href="/speaking">Speaking</NavbarLink>
      <NavbarLink href="/workshops">Workshops</NavbarLink>
      <NavbarLink href="/journal">Journal</NavbarLink>
      <NavbarLink href="/about">About</NavbarLink>
    </NavbarBase>
  );
}
