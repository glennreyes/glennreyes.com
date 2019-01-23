import { rgba } from 'polished';

// Colors
const blue = '#38485f';
const blue25 = rgba(blue, 0.25);
const blue50 = rgba(blue, 0.5);
const darkBlue = '#192942';
const darkGray = '#a5adb3';
const gray = '#d0d5d9';
const gray25 = rgba(gray, 0.25);
const gray50 = rgba(gray, 0.5);
const lightGray = '#edf1f5';
const lightGray25 = rgba(lightGray, 0.25);
const lightGray50 = rgba(lightGray, 0.5);
const white = '#ffffff';
const yellow = '#ebe5c5';
const yellow50 = rgba(yellow, 0.5);

// System
const radii = [0, 8];
const borders = [`1px solid ${blue}`, `1px solid ${lightGray}`];
const space = [0, 4, 8, 16, 24, 32, 48, 64];
const system = {
  borders,
  breakpoints: ['768px', '1024px'],
  colors: {
    blue,
    blue25,
    blue50,
    darkBlue,
    darkGray,
    gray,
    gray25,
    gray50,
    lightGray,
    lightGray25,
    lightGray50,
    white,
    yellow,
    yellow50,
  },
  fonts: {
    sans: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ],
  },
  fontSizes: [12, 16, 24, 32, 48, 64],
  fontWeights: ['normal', 'bold'],
  lineHeights: [1, 1.25],
  opacity: [0, 0.25, 0.5, 0.75, 1],
  radii,
  space,
};

// Variants
const variants = {
  cards: {
    primary: {
      bg: lightGray,
      border: borders[1],
      borderRadius: radii[1],
      color: darkGray,
      padding: space[3],
    },
    outline: {
      border: borders[1],
      borderRadius: radii[1],
      color: darkGray,
      padding: space[3],
    },
    dark: {
      primary: {
        backgroundColor: blue,
        border: borders[0],
        borderRadius: radii[1],
        color: gray50,
        padding: space[3],
      },
      outline: {
        backgroundColor: blue25,
        border: borders[0],
        borderRadius: radii[1],
        color: gray50,
        padding: space[3],
      },
    },
  },
};

const theme = { ...system, ...variants };

export default theme;
