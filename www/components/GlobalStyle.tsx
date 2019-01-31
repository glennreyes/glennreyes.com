import { createGlobalStyle, ThemeProps } from '../lib/styled-components';
import { GlobalStyleComponent } from 'styled-components';

type GlobalStyleProps = {
  darkMode?: boolean;
};

const GlobalStyle: GlobalStyleComponent<
  GlobalStyleProps,
  ThemeProps
> = createGlobalStyle<GlobalStyleProps>`
  html {
    height: 100%;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: ${props =>
      props.theme.colors[props.darkMode ? 'darkBlue' : 'white']};
    height: 100%;
    line-height: ${props => props.theme.lineHeights[0]};
    margin: 0;
    transition: ${props => props.theme.transitions[0]};
  }

  #__next {
    height: 100%;
  }
`;

export default GlobalStyle;
