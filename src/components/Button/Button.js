import React from 'react';
import PropTypes from 'prop-types';
import {
  DefaultButton,
  FilledButton,
  FlatButton,
  StyledButtonContent,
  StyledSpinner,
  StyledIconContainer,
} from './styles';

/**
 * The doadds button.
 *
 */
const Button = (props) => {
  const {
    label,
    variant,
    isLoading,
    iconLeft,
    iconRight,
    disabled,
    children,
    ...rest
  } = props;
  let ButtonComp = (variant === 'flat') ? FlatButton : DefaultButton;
  if (variant === 'filled') {
    ButtonComp = FilledButton;
  }
  const { icon } = props;

  return (
    <ButtonComp aria-label={label || children} disabled={disabled || isLoading} {...rest}>
      <StyledButtonContent isLoading={isLoading}>
        { (iconLeft) && (
          <StyledIconContainer focusable="false" position="left">{iconLeft}</StyledIconContainer>
        ) }
        { icon || children }
        { (iconRight) && (
          <StyledIconContainer focusable="false" position="right">{iconRight}</StyledIconContainer>
        ) }
      </StyledButtonContent>
      <StyledSpinner aria-hidden="true" focusable="false" isLoading={isLoading} {...rest} />
    </ButtonComp>
  );
};

Button.propTypes = {
  /**
  * Button content. Required even for icon button as it sets the aria-label.
  * You may override the label with the label props if necessary.
  */
  children: PropTypes.string,
  /**
  * Button label
  */
  label: PropTypes.string,
  /**
  * Button size
  */
  scale: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
  * Button color
  */
  color: PropTypes.string,
  /**
  * Button variant
  */
  variant: PropTypes.oneOf(['default', 'flat', 'filled']),
  /**
  * One of themes radii for button border-radius
  */
  radius: PropTypes.oneOf(['regular', 'rounded', 'double']),
  /**
  * Sets the width to 100%
  */
  fullWidth: PropTypes.bool,
  /**
  * Sets the loading state
  */
  isLoading: PropTypes.bool,
  /**
  * Sets the disabled state
  */
  disabled: PropTypes.bool,
  /**
  * Sets an icon button
  * Require an icon component.
  */
  icon: PropTypes.node,
  /**
  * Sets an icon on children's left
  * Require an icon component.
  */
  iconLeft: PropTypes.node,
  /**
  * Sets an icon on children's right
  * Require an icon component.
  */
  iconRight: PropTypes.node,
  /**
  * For icon button. Ignore any other icon and children prop.
  * Require an icon component.
  */
  iconOnly: PropTypes.node,
};

Button.defaultProps = {
  scale: 'medium',
  color: 'default',
  variant: 'default',
  radius: 'regular',
};

export default Button;
