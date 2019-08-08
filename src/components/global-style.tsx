import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MenuToggleContext from './menu-toggle-context';

const StyledGlobalStyle = createGlobalStyle<{ isMenuOpen: boolean }>`
  html {
    box-sizing: border-box;
    font-family: ${p => p.theme.fonts.sans};
    height: 100%;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    background: ${p => p.theme.bg};
    color: ${p => p.theme.textColor};
    height: 100%;
    margin: ${p => p.theme.space[0]};
    ${p => (p.isMenuOpen ? 'overflow: hidden;' : '')}
  }
`;

const GlobalStyle = () => {
  const { isOpen } = React.useContext(MenuToggleContext);

  return <StyledGlobalStyle isMenuOpen={isOpen} />;
};

export default GlobalStyle;
