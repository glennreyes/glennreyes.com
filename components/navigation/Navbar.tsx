import { useIsScrollTop } from '../../hooks/useIsScrollTop';
import { Navbar as NavbarBase } from '../ui/Navbar';
import { NavbarLink } from '../ui/NavbarLink';

export function Navbar() {
  const isScrollTop = useIsScrollTop();

  return (
    <NavbarBase isScrollTop={isScrollTop}>
      <NavbarLink href="/">Home</NavbarLink>
      <NavbarLink href="/about">About</NavbarLink>
      <NavbarLink href="/articles">Articles</NavbarLink>
      <NavbarLink href="/speaking">Speaking</NavbarLink>
      <NavbarLink href="/workshops">Workshops</NavbarLink>
      <NavbarLink href="/journal">Journal</NavbarLink>
    </NavbarBase>
  );
}
