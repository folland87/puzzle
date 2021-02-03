import React from 'react';
import styled, { css } from 'styled-components';
import { margin } from 'styled-system';
import { get, filterProps } from '../utils';

// dependencies
import Spinner from '../Spinner';

const baseButton = css`
  width: ${({ fullWidth }) => fullWidth && '100%'};
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)};
  line-height: ${get('lineHeights.copy')};
  font-family: ${get('fonts.primary')};
  font-weight: ${get('fontWeights.regular')};
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  flex-wrap: 0;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: ${get('radius.sharp')};
  border: 0;
  padding: 0;
  margin: ${get('space.2')};
  ${margin};
  &:focus {
    outline: 2px solid ${get('colors.focus')};
    outline-offset: 2px;
    z-index: 200;
  };
  /* &:active:not([disabled]) {
    transform: translateY(1px);
  }; */
`;

export const FlatButton = styled(
  ({ children, ...props }) => (<a type="button" {...filterProps(props)}>{children}</a>),
)`
  ${baseButton};
  color: ${get('colors.primary.1')};
  background: transparent;
  border-radius: ${get('radius.rounded')};
  &:hover:not([disabled]) {
    background-color: ${get('colors.primary.3')};
  }
  &:active:not([disabled]) {
    background-color: ${get('colors.primary.3')};
  };
`;

export const SecondaryButton = styled(
  (props) => (<button type="button" {...filterProps(props)} />),
)`
  ${baseButton};
  box-shadow: 0 0 0 1px ${get('colors.primary.1')};
  box-shadow: ${({ icon }) => icon && 'unset'};
  background: transparent;
  color: ${get('colors.primary.1')};
  &:hover:not([disabled]) {
    background: ${get('colors.light.2')};
  }
  &:active:not([disabled]) {
    background: ${get('colors.light.2')};
  };
  &:disabled {
    box-shadow: 0 0 0 1px ${get('colors.dark.3')};
    color: ${get('colors.dark.3')};
    cursor: not-allowed;
  };
`;

export const PrimaryButton = styled(
  (props) => (<button type="button" {...filterProps(props)} />),
)`
  ${baseButton};
  color: ${get('colors.light.0')};
  background: ${get('colors.primary.1')};
  &:hover:not([disabled]) {
    background-color: ${get('colors.primary.2')};
  }
  &:active:not([disabled]) {
    background-color: ${get('colors.primary.2')};
  };
  &:disabled {
    color: ${get('colors.dark.3')};
    background: ${get('colors.light.3')};
    cursor: not-allowed;
  };
`;

export const StyledSpinner = styled((props) => <Spinner {...filterProps(props)} />)`
  .internal-circle,
  .external-circle {
    stroke: currentColor;
  };
  position: absolute;
  display: ${({ isLoading }) => ((isLoading) ? 'block' : 'none')};
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)});
`;

export const StyledIconContainer = styled.span`
  font-size: calc(${({ scale }) => get(`fontSizes.${scale}`)} * ${get('lineHeights.copy')});
  visibility: ${({ isLoading }) => ((isLoading) ? 'hidden' : 'visible')};
  margin-left: ${({ position }) => (position === 'right') && get('space.2')};
  margin-right: ${({ position }) => (position === 'left') && get('space.2')};
  display: inline-flex;
  align-self: center;
`;

export const StyledButtonContent = styled.span`
  padding: ${get('space.2')} ${({ icon }) => (icon ? get('space.2') : get('space.4'))};
  padding-left: ${({ iconLeft }) => iconLeft && 0};
  padding-right: ${({ iconRight }) => iconRight && 0};
  visibility: ${({ isLoading }) => ((isLoading) ? 'hidden' : 'visible')};
  > * {
    visibility: ${({ isLoading }) => ((isLoading) ? 'hidden' : 'visible')};
  }
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
