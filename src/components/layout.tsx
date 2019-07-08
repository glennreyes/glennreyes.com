/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import styled from 'styled-components';
import Header from './header';
import GlobalStyle from './global-style';
import MenuToggleContext, { MenuToggleProvider } from './menu-toggle-context';
import ThemeProvider from './theme-provider';

type LayoutProps = {
  children: React.ReactNode;
};

const Main = styled.main`
  background: ${p => p.theme.bg};
  padding-top: ${p => p.theme.space[6]}px;

  ${p => p.theme.media.desktop`
    padding-top: ${p.theme.space[7]}px;
  `}
`;

const Content = ({ children }: LayoutProps) => {
  const { isOpen } = React.useContext(MenuToggleContext);
  return (
    <>
      <GlobalStyle isMenuOpen={isOpen} />
      <Header />
      <Main>{children}</Main>
      <footer>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

const Layout = (props: LayoutProps) => (
  <ThemeProvider>
    <MenuToggleProvider>
      <Content {...props} />
    </MenuToggleProvider>
  </ThemeProvider>
);

export default Layout;
