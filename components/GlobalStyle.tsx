import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
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

  html, body, #__next {
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
