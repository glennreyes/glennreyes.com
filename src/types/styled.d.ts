import { dark, light, system } from '../theme';

// Strongly type the styled-components theme
declare module 'styled-components' {
  type Theme = typeof dark & typeof light & typeof system;
  export interface DefaultTheme extends Theme {}
}
