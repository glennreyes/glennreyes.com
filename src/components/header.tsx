import { graphql, useStaticQuery } from 'gatsby';
import { rgba } from 'polished';
import React from 'react';
import { useWindowScroll } from 'react-use';
import styled from 'styled-components';
import { useMedia } from 'use-media';
import DarkModeButton from './dark-mode-button';
import Link from './link';
import Menu from './menu';
import MenuButton from './menu-button';
import MenuToggleContext from './menu-toggle-context';
import { breakpoints } from '../theme';
import { HeaderQuery } from '../types/generated/graphql';

const Wrapper = styled.header<{
  isDefaultPosition: boolean;
  isMenuOpen: boolean;
}>`
  background: ${p =>
    p.isDefaultPosition || p.isMenuOpen
      ? p.theme.headerBg
      : rgba(p.theme.headerBg, 0.95)};
  ${p => (p.isDefaultPosition ? '' : `box-shadow: ${p.theme.boxShadow[0]};`)}
  display: flex;
  height: ${p => p.theme.space[6]}px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  transition: ${p => p.theme.transition};
  width: 100%;
  z-index: 10;

  ${p => p.theme.media.desktop`
    height: ${p.isDefaultPosition ? p.theme.space[7] : p.theme.space[6]}px;
  `}
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
    padding-left: ${p.theme.space[5]}px;
    padding-right: ${p.theme.space[5]}px;
  `}
`;

const TitleLink = styled(Link)`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[0]};
  text-align: center;

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[2]}px;
  `}
`;

const Header = () => {
  const data: HeaderQuery = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { isOpen, close } = React.useContext(MenuToggleContext);
  const isDesktop = useMedia({ minWidth: breakpoints.desktop });
  const { y } = useWindowScroll();

  return (
    <Wrapper isDefaultPosition={y === 0} isMenuOpen={isOpen}>
      <Container>
        {!isDesktop && <MenuButton />}
        {data.site && data.site.siteMetadata && (
          <TitleLink onClick={() => close()} to="/">
            {data.site.siteMetadata.title}
          </TitleLink>
        )}
        <Menu />
        <DarkModeButton />
      </Container>
    </Wrapper>
  );
};

export default Header;
