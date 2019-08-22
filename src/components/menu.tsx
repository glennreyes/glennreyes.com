import ms from 'ms';
import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import BreakpointContext from './breakpoint-context';
import Link from './link';
import MenuToggleContext from './menu-toggle-context';
import { system } from '../theme';

const links = [
  {
    label: 'Blog',
    path: '/blog/',
  },
  {
    label: 'Talks',
    path: '/talks/',
  },
  {
    label: 'Workshops',
    path: '/workshops/',
  },
  {
    label: 'About',
    path: '/about/',
  },
  {
    label: 'Contact',
    path: '/contact/',
  },
];

const Wrapper = styled.nav`
  background: ${p => p.theme.colors.bg};
  display: flex;
  flex-direction: column;
  // Height is managed by react-pose, setting it to zero prevents menu from
  // flashing on initial render.
  height: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 100%;
  width: 100%;

  ${p => p.theme.media.desktop`
    background: none;
    flex-direction: row;
    height: auto;
    left: auto;
    overflow: visible;
    position: static;
    top: auto;
    width: auto;
  `}
`;

const PosedWrapper = posed(Wrapper)({
  close: { height: 0 },
  open: {
    height: `calc(100vh - ${system.space[4]}px)`,
  },
});

const MenuLink = styled(Link)`
  border-bottom: ${p => p.theme.borders[1]}px solid
    ${p => p.theme.colors.headerBg};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[2]}px;
  padding: ${p => p.theme.space[2]}px;
  text-transform: lowercase;

  ${p => p.theme.media.desktop`
    &:hover {
      color: ${p.theme.colors.activeText};
    }
  `}

  &[aria-current='page'] {
    color: ${p => p.theme.colors.activeText};
  }

  ${p => p.theme.media.tablet`
    padding-left: ${p.theme.space[4]}px;
    padding-right: ${p.theme.space[4]}px;
  `}

  ${p => p.theme.media.desktop`
    border-bottom: none;
    margin: 0 ${p.theme.space[1]}px;
    padding-left: ${p.theme.space[2]}px;
    padding-right: ${p.theme.space[2]}px;
  `}
`;

const Menu = () => {
  const { isDesktop } = React.useContext(BreakpointContext);
  const { isOpen, close } = React.useContext(MenuToggleContext);

  if (isDesktop) {
    return (
      <Wrapper>
        {links.map(({ label, path }) => (
          <MenuLink key={label.toLowerCase()} to={path}>
            {label}
          </MenuLink>
        ))}
      </Wrapper>
    );
  }

  // On mobile we use the wrapper that includes animation.
  const pose = isOpen ? 'open' : 'close';

  return (
    <PosedWrapper duration={ms(system.transition)} pose={pose}>
      {links.map(({ label, path }) => (
        <MenuLink key={label.toLowerCase()} onClick={() => close()} to={path}>
          {label}
        </MenuLink>
      ))}
    </PosedWrapper>
  );
};

export default Menu;
