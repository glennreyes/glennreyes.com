import { CSSObject, CSSProp } from 'styled-components';
import theme from '../theme';

// Strongly type the styled-components theme
declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
