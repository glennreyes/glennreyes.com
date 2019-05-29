export const system = {
  borders: [0, 1, 2, 4],
  breakpoints: ['768px', '1024px'],
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
  radii: [0, 8, 16],
  space: [0, 4, 8, 16, 32, 64, 128],
  transition: '0.4s',
};

export const light = {
  bg: system.colors.gray[0],
  headerBg: system.colors.white,
};

export const dark = {
  bg: system.colors.black,
  headerBg: system.colors.gray[3],
};
