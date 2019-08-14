import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';
import mdxComponents from './mdx';

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  background: ${p => p.theme.colors.bg};
  padding: ${p => p.theme.space[6]}px 0;

  ${p => p.theme.media.desktop`
    padding-top: ${p.theme.space[7]}px;
  `}
`;

const Layout = (props: LayoutProps) => (
  <Wrapper>
    <Header />
    <MDXProvider components={mdxComponents}>
      <Main {...props} />
    </MDXProvider>
    <Footer />
  </Wrapper>
);

export default Layout;
