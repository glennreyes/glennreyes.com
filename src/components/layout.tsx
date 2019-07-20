import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import GlobalStyle from './global-style';
import Header from './header';
import MenuToggleContext, { MenuToggleProvider } from './menu-toggle-context';
import mdxComponents from './mdx';
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
      <MDXProvider components={mdxComponents}>
        <Main>{children}</Main>
      </MDXProvider>
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
