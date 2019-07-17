import { graphql, useStaticQuery } from 'gatsby';
import { rgba } from 'polished';
import React from 'react';
import { useWindowScroll } from 'react-use';
import styled from 'styled-components';
import DarkModeButton from './dark-mode-button';
import Link from './link';
import Menu from './menu';
import MenuButton from './menu-button';
import MenuToggleContext from './menu-toggle-context';
import { HeaderQuery } from '../types/generated/graphql';

const Wrapper = styled.header<{
  scrollThreshold: boolean;
  isMenuOpen: boolean;
}>`
  background: ${p =>
    p.scrollThreshold || p.isMenuOpen
      ? p.theme.headerBg
      : rgba(p.theme.headerBg, 0.95)};
  ${p => (p.scrollThreshold ? '' : `box-shadow: ${p.theme.boxShadow[0]};`)}
  display: flex;
  height: ${p => p.theme.space[6]}px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  transition: ${p => p.theme.transition};
  width: 100%;
  z-index: 10;

  ${p => p.theme.media.desktop`
    height: ${p.scrollThreshold ? p.theme.space[7] : p.theme.space[6]}px;

    &:hover {
      background: ${p.theme.headerBg};
    }
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
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights[0]};
  text-align: center;

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[3]}px;
  `}
`;

const Header = () => {
  const { site }: HeaderQuery = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const title = (site && site.siteMetadata && site.siteMetadata.title) || null;
  const { isOpen, close } = React.useContext(MenuToggleContext);
  const { y } = useWindowScroll();

  return (
    <Wrapper scrollThreshold={y < 64} isMenuOpen={isOpen}>
      <Container>
        <MenuButton />
        {title && (
          <TitleLink onClick={() => close()} to="/">
            {title}
          </TitleLink>
        )}
        <Menu />
        <DarkModeButton />
      </Container>
    </Wrapper>
  );
};

export default Header;
