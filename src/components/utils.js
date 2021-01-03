import defaultTheme from '../theme';

export const get = (value, fallBack) => ({ theme }) => {
  const values = value && value.split ? value.split('.') : [value];
  let property = theme || defaultTheme;
  let i;
  for (i = 0; i < values.length; i += 1) {
    property = property ? property[values[i]] : undefined;
  }
  return property || fallBack;
};

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
};
