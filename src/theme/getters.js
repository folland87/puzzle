import defaultTheme from './defaultTheme';

export const get = (value, fallBack) => ({ theme }) => {
  const values = value && value.split ? value.split('.') : [value];
  let property = theme;
  let i;
  for (i = 0; i < values.length; i++) {
    property = property ? property[values[i]] : undefined;
  }
  return property || fallBack;
}


export const getElevation = value => ({theme, elevation}) => {
  const currentTheme = defaultTheme;
  return `
    z-index: ${currentTheme.elevations[value]};
    box-shadow: ${currentTheme.shadows[value]};
  `;
}

export const getColor = (value) => ({ theme, color }) => {
  const valued = (value.color || value.color === "") ? value.color : value;
  const values = theme.colors || defaultTheme.colors;
  const selectedColor = valued || color || 'currentColor';
  const splitted = selectedColor.split('-');
  const tint = (splitted.length > 1) ? parseInt(splitted[1], 10) : 1;
  const colors = splitted[0];
  if (values[colors] && values[colors].length) {
    return values[colors][tint];
  }
  return values[colors] || value;
}

export const getRadius = value => ({ theme, radius }) => {
  const values = theme.radius || defaultTheme.radius;
  if (radius) {
    return values[radius] || radius;
  }
  return values[value];
}
export const getFontSize = value => ({ theme, fontSize }) => {
  const values = theme.fontSizes || defaultTheme.fontSizes;
  if (fontSize) {
    return values[fontSize];
  };
  return values[value];
}
export const getFontWeight = value => ({ theme, fontWeight }) => {
  const values = theme.fontWeights || defaultTheme.fontWeights;
  if (fontWeight) {
    return values[fontWeight];
  }
  return values[value];
}
export const getFont = value => ({ theme, font }) => {
  const values = theme.fonts || defaultTheme.fonts;
  if (font) {
    return values[font];
  }
  return values[value];
}
export const getSpace = value => ({ theme, space }) => {
  const values = theme.space || defaultTheme.space;
  if (!space) {
    return values[value] + 'px';
  }
  return values[space] + 'px';
}

export const getHeight = value => ({ theme, height }) => {
  const values = theme.heights || defaultTheme.heights;
  if (height) {
    return values[height];
  }
  return values[value];
}

export const filterProps = (props) => {
  const {
    color,
    variant,
    radius,
    scale,
    size,
    outline,
    error,
    flat,
    decoration,
    iconLeft,
    iconRight,
    iconOnly,
    fontSize,
    fontWeight,
    font,
    textAlign,
    lineHeight,
    underline,
    space,
    isDisabled,
    isActive,
    isLoading,
    m, mx, my, mt, mb, mr, ml,
    p, px, py, pt, pb, pr, pl,
    width,
    height,
    ...rest
  } = props;
  return rest;
}
