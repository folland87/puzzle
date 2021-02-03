import React from 'react';
import PropTypes from 'prop-types';
import { RiCloseLine } from 'react-icons/ri';
import {
  PrimaryButton,
  SecondaryButton,
  FlatButton,
  StyledButtonContent,
  StyledSpinner,
  StyledIconContainer,
} from './styles';

/**
 * The puzzle button.
 *
 */
// const IconButton = () => {};
// const LinkButton = () => {};
// const Button = () => {};

export const CloseButton = (props) => <Button secondary icon={<RiCloseLine {...props} />} />;

export const LinkButton = (props) => {
  const {
    label,
    secondary,
    isLoading,
    iconLeft,
    icon,
    iconRight,
    disabled,
    children,
    color,
    scale,
    radius,
    fullWidth,
    to,
    ...rest
  } = props;
  return (
    <FlatButton
      aria-label={label || children}
      disabled={disabled || isLoading}
      color={color}
      fullWidth={fullWidth}
      scale={scale}
      icon={icon}
      to={to}
      {...rest}
    >
      <StyledButtonContent isLoading={isLoading}>
        { (iconLeft) && (
          <StyledIconContainer scale={scale} focusable="false" position="left">{iconLeft}</StyledIconContainer>
        ) }
        { (icon) ? <StyledIconContainer scale={scale} focusable="false">{icon}</StyledIconContainer> : children }
        { (iconRight) && (
          <StyledIconContainer scale={scale} focusable="false" position="right">{iconRight}</StyledIconContainer>
        ) }
      </StyledButtonContent>
      <StyledSpinner
        aria-hidden="true"
        focusable="false"
        secondary={secondary}
        isLoading={isLoading}
        color={color}
        scale={scale}
      />
    </FlatButton>
  );
};

export const Button = (props) => {
  const {
    label,
    secondary,
    isLoading,
    iconLeft,
    icon,
    iconRight,
    disabled,
    children,
    color,
    scale,
    radius,
    fullWidth,
    onClick,
    ...rest
  } = props;
  const ButtonComp = (secondary) ? SecondaryButton : PrimaryButton;
  return (
    <ButtonComp
      aria-label={label || children}
      disabled={disabled || isLoading}
      color={color}
      fullWidth={fullWidth}
      scale={scale}
      onClick={onClick}
      icon={icon}
      {...rest}
    >
      <StyledButtonContent isLoading={isLoading} icon={icon}>
        { (iconLeft) && (
          <StyledIconContainer scale={scale} focusable="false" position="left">{iconLeft}</StyledIconContainer>
        ) }
        { (icon) ? <StyledIconContainer scale={scale} focusable="false">{icon}</StyledIconContainer> : children }
        { (iconRight) && (
          <StyledIconContainer scale={scale} focusable="false" position="right">{iconRight}</StyledIconContainer>
        ) }
      </StyledButtonContent>
      <StyledSpinner
        aria-hidden="true"
        focusable="false"
        secondary={secondary}
        isLoading={isLoading}
        color={color}
        scale={scale}
      />
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
  * Button onClick function
  */
  onClick: PropTypes.func,
  /**
  * Button label
  */
  label: PropTypes.string,
  /**
  * Button size
  */
  scale: PropTypes.oneOf(['tiny', 'small', 'regular', 'large']),
  /**
  * Button color
  */
  color: PropTypes.string,
  /**
  * Button variant
  */
  secondary: PropTypes.bool,
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
};

Button.defaultProps = {
  children: null,
  scale: 'regular',
  color: 'default',
  secondary: false,
  radius: 'sharp',
  onClick: () => null,
  label: null,
  fullWidth: false,
  isLoading: false,
  disabled: null,
  icon: null,
  iconLeft: null,
  iconRight: null,
};

LinkButton.propTypes = Button.propTypes;
LinkButton.defaultProps = Button.defaultProps;
CloseButton.propTypes = Button.propTypes;
CloseButton.defaultProps = Button.defaultProps;
