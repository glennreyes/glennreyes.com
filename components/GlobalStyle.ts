import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }

  * {
    box-sizing: border-box;
    -webkit-appearance: none;
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  ${normalize}

  body {
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }

  button:not(:disabled) {
    cursor: pointer;
  }
`;

export default GlobalStyle;
