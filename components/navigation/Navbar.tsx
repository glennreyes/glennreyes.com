import { NavLink } from '../NavLink';
import { Navbar as NavbarBase } from '../ui/Navbar';

export function Navbar() {
  return (
    <NavbarBase>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/articles">Articles</NavLink>
      <NavLink href="/speaking">Speaking</NavLink>
      <NavLink href="/workshops">Workshops</NavLink>
    </NavbarBase>
  );
}
