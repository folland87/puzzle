import { colors } from './primitives';

// const colors = {
//
// }

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
  buttons,
  breakpoints: ['32rem', '48rem', '64rem'],
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
  lineHeights: {
    solid: 1,
    title: 1.3,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  heights: {
    tiny: '20px',
    small: '24px',
    medium: '32px',
    large: '40px',
    extralarge: '56px',
    huge: '64px',
    giant: '72px',
    hero: '96px',
  },
  fonts: {
    primary: '"Marianne", sans-serif',
    headings: '"Marianne", sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semibold: 500,
    bold: 600,
  },
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '16px',
    extralarge: '20px',
    huge: '24px',
    giant: '32px',
    hero: '48px',
  },
  radius: {
    sharp: '0',
    regular: '4px',
    double: '8px',
    rounded: '100rem',
  },
  colors,
  // colors: {
  //   colors,
  //   pagination: colors.frejus[1],
  //   link: '#2a7ffe',
  // },
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
