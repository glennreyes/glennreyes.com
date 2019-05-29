import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${p => p.theme.fonts.sans};
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
    margin: ${p => p.theme.space[0]};
    transition: ${p => p.theme.transition};
  }
`;

export default GlobalStyle;
