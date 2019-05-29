import { CSSObject, CSSProp } from 'styled-components';
import theme from '../theme';

// Enable css prop support globally
declare module 'react' {
  interface Attributes {
    css?: CSSObject | CSSProp;
  }
}

// Strongly type the styled-components theme
declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
