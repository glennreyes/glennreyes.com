import { NavbarMenu } from './NavbarMenu';
import { NavbarMenuItem } from './NavbarMenuItem';
import { NavbarMenuLink } from './NavbarMenuLink';

export function Menu() {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <NavbarMenuLink href="/about">About</NavbarMenuLink>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <NavbarMenuLink href="/posts">Posts</NavbarMenuLink>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <NavbarMenuLink href="/appearances">Appearances</NavbarMenuLink>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <NavbarMenuLink href="/talks">Talks</NavbarMenuLink>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <NavbarMenuLink href="/workshops">Workshops</NavbarMenuLink>
      </NavbarMenuItem>
    </NavbarMenu>
  );
}
