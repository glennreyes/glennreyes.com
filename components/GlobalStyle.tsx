import { createGlobalStyle, ThemeProps } from '../lib/styled-components';
import { GlobalStyleComponent } from 'styled-components';

interface GlobalStyleProps {
  darkMode?: boolean;
}

const GlobalStyle: GlobalStyleComponent<
  GlobalStyleProps,
  ThemeProps
> = createGlobalStyle<GlobalStyleProps>`
  html, body, #__next {
    height: 100%;
  }

  body {
    background: ${props =>
      props.theme.colors[props.darkMode ? 'darkBlue' : 'white']};
    line-height: ${props => props.theme.lineHeights[0]};
    margin: 0;
    transition: ${props => props.theme.transitions[0]};
  }
`;

export default GlobalStyle;
