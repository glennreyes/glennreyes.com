import { sortBy } from 'lodash';
import { rgba } from 'polished';
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

const colors = {
  black: '#000',
  blue: ['#0d4bbf', '#9abbf9'],
  gray: ['#f9f9f9', '#c4c4c4', '#555555', '#2e2e2e'],
  white: '#fff',
};

export const system = {
  borders: [1, 2, 4],
  breakpoints: sortBy(Object.values(breakpoints).map(value => `${value}px`)),
  colors,
  contentWidths: [640, 1280],
  fontSizes: [12, 16, 20, 24, 32, 48, 72],
  fontWeights: { bold: 700, bolder: 800, normal: 400 },
  fonts: {
    mono:
      "'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace",
    sans:
      "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
  },
  lineHeights: { body: 1.5, heading: 1.25 },
  media,
  radii: [4, 8, 16],
  shadows: {
    dark: `0px 0px 16px ${rgba(colors.black, 0.1)}`,
    light: `0px 0px 16px ${rgba(colors.white, 0.25)}`,
  },
  space: [4, 8, 16, 24, 32, 48, 64, 128, 256],
  transition: '0.4s',
};

export const light = {
  ...system,
  colors: {
    ...colors,
    activeText: system.colors.gray[2],
    bg: system.colors.gray[0],
    border: system.colors.gray[1],
    cardBg: system.colors.white,
    code: system.colors.gray[2],
    codeBg: system.colors.white,
    cover: system.colors.gray[0],
    coverBg: system.colors.black,
    coverHeading: system.colors.white,
    headerBg: system.colors.white,
    hoverShadow: system.shadows.dark,
    icon: system.colors.gray[1],
    invertedCardBg: system.colors.gray[3],
    invertedText: system.colors.white,
    invertedTextSecondary: system.colors.gray[1],
    link: system.colors.blue[0],
    text: system.colors.black,
    textSecondary: system.colors.gray[2],
  },
};

export const dark = {
  ...system,
  colors: {
    ...colors,
    activeText: system.colors.gray[1],
    bg: system.colors.black,
    border: system.colors.gray[2],
    cardBg: system.colors.gray[3],
    code: system.colors.gray[1],
    codeBg: system.colors.gray[3],
    cover: system.colors.gray[3],
    coverBg: system.colors.white,
    coverHeading: system.colors.black,
    headerBg: system.colors.gray[3],
    hoverShadow: system.shadows.light,
    icon: system.colors.gray[2],
    link: system.colors.blue[1],
    text: system.colors.white,
    textSecondary: system.colors.gray[1],
  },
};
