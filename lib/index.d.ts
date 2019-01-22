import { Interpolation } from 'styled-components';
import { Theme } from './theme';

declare module 'react' {
  interface DOMAttributes<T> {
    css?: Interpolation<Theme>;
  }
}
