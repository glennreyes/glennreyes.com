import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';
import mdxComponents from './mdx';

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

const Layout = (props: LayoutProps) => (
  <>
    <Header />
    <MDXProvider components={mdxComponents}>
      <Main {...props} />
    </MDXProvider>
    <Footer />
  </>
);

export default Layout;
