import { WrapRootElementBrowserArgs } from 'gatsby';
import React from 'react';
import { BreakpointProvider } from './breakpoint-context';
import GlobalStyle from './global-style';
import { MenuToggleProvider } from './menu-toggle-context';
import ThemeProvider from './theme-provider';

type RootProps = WrapRootElementBrowserArgs;

const Root = ({ element }: RootProps) => (
  <ThemeProvider>
    <MenuToggleProvider>
      <GlobalStyle />
      <BreakpointProvider>{element}</BreakpointProvider>
    </MenuToggleProvider>
  </ThemeProvider>
);

export default Root;
