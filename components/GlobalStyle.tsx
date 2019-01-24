import { createGlobalStyle } from '../lib/styled-components';

export default createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  body {
    line-height: ${props => props.theme.lineHeights[0]};
    margin: 0;
  }
`;
