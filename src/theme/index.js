import typography from './typography';
import palette from './colors';
import spacing from './spacing';

const colors = {
  focus: '#2a7ffe', // from focus color gouvernement.fr
  // Brand
  primary: palette.frejus,
  accent: palette.hyeres,

  // Monochromes
  light: ['#ffffff', '#f2f2f2', '#e1e4e8', '#d1d5da', '#959da5'],
  dark: ['#666666', '#555555', '#333333', '#121212', '#000000'],

  // semantic
  danger: palette.marianne,
  warning: palette.marignane,
  info: palette.frejus,
  success: palette.colmar,

  // Palette
  ...palette,
};

const buttons = {
  default: {
    color: '#202020',
    background: '#f9f9f9',
    hover: '#f0f0f0',
    active: '#bfbfbf',
  },
  info: {
    background: 'white',
    color: colors.info[1],
    hover: colors.info[4],
    active: colors.info[0],
  },
  danger: {
    background: 'white',
    color: colors.danger[1],
    hover: colors.danger[4],
    active: colors.danger[0],
  },
  success: {
    background: 'white',
    color: colors.success[1],
    hover: colors.success[4],
    active: colors.success[0],
  },
  warning: {
    background: 'white',
    color: colors.warning[1],
    hover: colors.warning[4],
    active: colors.warning[0],
  },
  primary: {
    background: 'white',
    color: colors.primary[1],
    hover: colors.primary[4],
    active: colors.primary[0],
  },
  accent: {
    background: 'white',
    color: colors.accent[1],
    hover: colors.accent[4],
    active: colors.accent[0],
  },
};

export default {
  colors,
  buttons,
  ...spacing,
  ...typography,
  radius: {
    sharp: '0',
    regular: '4px',
    double: '8px',
    rounded: '100rem',
  },
  elevations: [200, 400, 800, 1600, 2400],
  shadows: {
    out: '0 1px 1px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
    raised: '0 2px 2px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
    overlay: '0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
    stickyNav: '0 8px 8px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
    tempNav: '0 16px 16px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
    popOut: '0 24px 24px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
  },
};
