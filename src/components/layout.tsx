/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import GlobalStyle from './global-style';
import Header from './header';
import MenuToggleContext, { MenuToggleProvider } from './menu-toggle-context';
import ThemeProvider from './theme-provider';

type LayoutProps = {
  children: React.ReactNode;
};

const Main = styled.main`
  background: ${p => p.theme.bg};
  padding: ${p => p.theme.space[7]}px 0;

  ${p => p.theme.media.desktop`
    padding-top: ${p.theme.space[8]}px;
  `}
`;

const Content = ({ children }: LayoutProps) => {
  const { isOpen } = React.useContext(MenuToggleContext);
  return (
    <>
      <GlobalStyle isMenuOpen={isOpen} />
      <Header />
      <Main>{children}</Main>
      <Footer />
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
