/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import Header from './header';
import GlobalStyle from './global-style';
import MenuToggleContext, { MenuToggleProvider } from './menu-toggle-context';
import ThemeProvider from './theme-provider';

type LayoutProps = {
  children: React.ReactNode;
};

const Content = ({ children }: LayoutProps) => {
  const { isOpen } = React.useContext(MenuToggleContext);
  return (
    <>
      <GlobalStyle isMenuOpen={isOpen} />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
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
