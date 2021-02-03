import typography from './typography';
import palette from './colors';
import spacing from './spacing';

// const darkColors = {
//   focus: '#5398FF',
//   primary: palette.france.reverse(),
//   accent: palette.hyeres.reverse(),
//
//   // Monochromes
//   dark: ['#ffffff', '#f8f8f8', '#f0f0f0', '#E7E7E7', '#CECECE'],
//   light: ['#1e1e1e', '#2a2a2a', '#383838', '#6a6a6a', '#9c9c9c'],
//
//   // semantic
//   danger: '#f00000',
//   warning: '#fa5c00',
//   info: '#5e74d9',
//   success: '#16a757',
//   // Palette
//   ...palette,
// };

const colors = {
  focus: '#2a7ffe',
  // Brand
  primary: palette.france,
  accent: palette.hyeres,

  // Monochromes
  light: ['#ffffff', '#f8f8f8', '#f0f0f0', '#E7E7E7', '#CECECE'],
  dark: ['#1e1e1e', '#2a2a2a', '#383838', '#6a6a6a', '#9c9c9c'],

  // semantic
  danger: '#b60000',
  warning: '#fa5c00',
  info: '#3a55d1',
  success: '#0D6635',

  // Palette
  ...palette,
};

const buttons = {
  default: {
    color: colors.dark[0],
    background: colors.light[1],
    hover: colors.light[2],
    active: colors.light[4],
  },
  info: {
    background: 'white',
    color: colors.info,
    hover: colors.info[4],
    active: colors.info[0],
  },
  danger: {
    background: 'white',
    color: colors.danger,
    hover: colors.danger[4],
    active: colors.danger[0],
  },
  success: {
    background: 'white',
    color: colors.success,
    hover: colors.success[4],
    active: colors.success[0],
  },
  warning: {
    background: 'white',
    color: colors.warning,
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
    raised: '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
    overlay: '0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
    stickyNav: '0 8px 8px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
    tempNav: '0 16px 16px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
    popOut: '0 24px 24px 0 rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,.1);',
  },
};
