import ms from 'ms';
import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import Link from './link';
import MenuToggleContext from './menu-toggle-context';
import { system } from '../theme';

const links = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Talks',
    path: '/talks',
  },
  {
    label: 'Workshops',
    path: '/workshops',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

const Nav = styled.nav`
  background: ${p => p.theme.headerBg};
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${p => p.theme.space[5]}px);
  left: 0;
  overflow: auto;
  position: absolute;
  top: 100%;
  width: 100%;

  ${p => p.theme.media.desktop`
  background: none;
  flex-direction: row;
  height: auto;
  left: auto;
  position: static;
  top: auto;
  width: auto;
`}
`;

const Wrapper = posed(Nav)({
  close: { height: 0 },
  open: {
    height: `calc(100vh - ${system.space[5]}px)`,
  },
});

const MenuLink = styled(Link)`
  border-color: ${p => p.theme.bg};
  border-style: solid;
  border-width: ${p => p.theme.borders[2]}px 0;
  font-size: ${p => p.theme.fontSizes[1]}px;
  padding: ${p => p.theme.space[3]}px;
  text-transform: lowercase;

  & + & {
    border-top: none;
  }

  ${p => p.theme.media.tablet`
    padding-left: ${p.theme.space[4]}px;
    padding-right: ${p.theme.space[4]}px;
  `}

  ${p => p.theme.media.desktop`
    border: none;
    margin: 0 ${p.theme.space[2]}px;
    padding-left: ${p.theme.space[3]}px;
    padding-right: ${p.theme.space[3]}px;
  `}
`;

const Menu = () => {
  const { isOpen, close } = React.useContext(MenuToggleContext);
  const pose = isOpen ? 'open' : 'close';

  return (
    <Wrapper duration={ms(system.transition)} pose={pose}>
      {links.map(({ label, path }) => (
        <MenuLink key={label.toLowerCase()} onClick={() => close()} to={path}>
          {label}
        </MenuLink>
      ))}
    </Wrapper>
  );
};

export default Menu;
