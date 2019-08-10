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
  boxShadow: ['0px 0px 16px rgba(0, 0, 0, .1)'],
  colors: {
    black: '#000',
    blue: ['#0d4bbf', '#9abbf9'],
    gray: ['#f9f9f9', '#c4c4c4', '#555555', '#2e2e2e'],
    white: '#fff',
  },
  contentWidths: [640, 1280],
  fontSizes: [12, 16, 20, 24, 32, 48, 72],
  fontWeights: [400, 700, 800],
  fonts: {
    mono:
      "'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace",
    sans:
      "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
  },
  lineHeights: [1, 1.25, 1.5],
  media,
  radii: [0, 8, 16],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256],
  transition: '0.4s',
};

export const light = {
  activeTextColor: system.colors.gray[2],
  bg: system.colors.gray[0],
  borderColor: system.colors.gray[1],
  cardBg: system.colors.white,
  codeBg: system.colors.white,
  codeColor: system.colors.gray[2],
  coverBg: system.colors.black,
  coverHeading: system.colors.white,
  coverMeta: system.colors.gray[0],
  headerBg: system.colors.white,
  linkColor: system.colors.blue[0],
  textColor: system.colors.black,
  textColor2: system.colors.gray[2],
};

export const dark = {
  activeTextColor: system.colors.gray[1],
  bg: system.colors.black,
  borderColor: system.colors.gray[2],
  cardBg: system.colors.gray[3],
  codeBg: system.colors.gray[3],
  codeColor: system.colors.gray[1],
  coverBg: system.colors.white,
  coverHeading: system.colors.black,
  coverMeta: system.colors.gray[3],
  headerBg: system.colors.gray[3],
  linkColor: system.colors.blue[1],
  textColor: system.colors.white,
  textColor2: system.colors.gray[1],
};
