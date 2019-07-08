import {
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  css,
} from 'styled-components';

type MediaQueryCssFunction = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

interface Media {
  desktop: MediaQueryCssFunction;
  tablet: MediaQueryCssFunction;
}

export const breakpoints = {
  desktop: 1024,
  tablet: 768,
};

const media: Media = {
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${breakpoints.tablet}px) {
      ${css(...args)}
    }
  `,
};

export const system = {
  borders: [0, 1, 2, 4],
  boxShadow: ['0px 4px 8px rgba(0, 0, 0, .05)'],
  colors: {
    black: '#000',
    gray: ['#f9f9f9', '#c4c4c4', '#767676', '#2e2e2e'],
    white: '#fff',
  },
  fontSizes: [16, 20, 24, 32, 48, 72],
  fontWeights: ['normal', 'bold'],
  fonts: {
    mono: 'Menlo, monospace',
    sans: 'system-ui, sans-serif',
  },
  lineHeights: [1, 1.25, 1.5],
  media,
  radii: [0, 8, 16],
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256],
  transition: '0.4s',
};

export const light = {
  activeTextColor: system.colors.gray[2],
  bg: system.colors.gray[0],
  borderColor: system.colors.gray[1],
  headerBg: system.colors.white,
  textColor: system.colors.black,
  textColor2: system.colors.gray[2],
};

export const dark = {
  activeTextColor: system.colors.gray[1],
  bg: system.colors.black,
  borderColor: system.colors.gray[2],
  headerBg: system.colors.gray[3],
  textColor: system.colors.white,
  textColor2: system.colors.gray[1],
};
