import { CSSProp } from 'styled-components';
import { dark, light, system } from '../theme';

// Strongly type the styled-components theme
declare module 'styled-components' {
  type Theme = typeof dark & typeof light & typeof system;
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
  }
}
