import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { Theme } from './theme';

export type ThemeProps<T = {}> = styledComponents.ThemeProps<Theme & T>;
export const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export default styled;
