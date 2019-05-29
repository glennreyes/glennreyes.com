import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
