import { Interpolation } from 'styled-components';

declare module 'react' {
  interface DOMAttributes<T> {
    // This adds the type for the global css prop by styled-components
    css?: Interpolation;
  }
}
