import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

type MediaQueryCssFunction = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

interface Media {
  tablet: MediaQueryCssFunction;
  desktop: MediaQueryCssFunction;
}

const media: Media = {
  tablet: (first, ...interpolations) => css`
    @media (min-width: 768px) {
      ${css(first, ...interpolations)}
    }
  `,
  desktop: (first, ...interpolations) => css`
    @media (min-width: 1024px) {
      ${css(first, ...interpolations)}
    }
  `,
};

export const system = {
  borders: [0, 1, 2, 4],
  colors: {
    black: '#000',
    gray: ['#f9f9f9', '#c4c4c4', '#767676', '#2e2e2e'],
    white: '#fff',
  },
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: [16, 20, 24, 32, 48, 72],
  fontWeights: ['normal', 'bold'],
  lineHeights: [1, 1.25, 1.5],
  media,
  radii: [0, 8, 16],
  space: [0, 4, 8, 16, 32, 64, 128],
  transition: '0.4s',
};

export const light = {
  bg: system.colors.gray[0],
  headerBg: system.colors.white,
  textColor: system.colors.black,
};

export const dark = {
  bg: system.colors.black,
  headerBg: system.colors.gray[3],
  textColor: system.colors.white,
};
