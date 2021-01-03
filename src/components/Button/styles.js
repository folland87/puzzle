import React from 'react';
import styled, { css } from 'styled-components';
import { margin } from 'styled-system';
import { get, filterProps } from '../utils';

// dependencies
import Spinner from '../Spinner';

const iconButtonStyle = css`
  padding: 0;
  min-width: ${({ scale }) => get(`heights.${scale}`)}};
  width: ${({ scale }) => get(`heights.${scale}`)}};
`;

const StyledButton = styled((props) => (<button type="button" {...filterProps(props)} />))`
  ${margin};
  width: ${({ fullWidth }) => (fullWidth) && '100%'};
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)}};
  height: ${({ scale }) => get(`heights.${scale}`)}};
  font-family: ${get('fonts.primary')};
  text-decoration: none;
  font-weight: ${get('fontWeights.medium')};
  cursor: pointer;
  display: inline-flex;
  flex-wrap: 0;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: ${({ radius }) => get(`radius.${radius}`, radius)}};
  padding: 0 ${get('space.3')};
  border: 0;
  &:focus {
    outline: 3px solid transparent;
    box-shadow: 0 0 0 3px ${get('colors.focus')};
    z-index: 200;
  };
  &:active:not([disabled]) {
    transform: translateY(1px);
  };
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  };
  ${({ icon }) => (icon) && iconButtonStyle};
`;

export const DefaultButton = styled(StyledButton)`
  background: ${get('buttons.default.background')};
  color: ${({ color }) => get(`buttons.${color}.color`)};
  box-shadow: ${get('shadows.out')};
  &:hover:not([disabled]) {
    background: ${get('buttons.default.hover')};
  }
`;

export const FlatButton = styled(StyledButton)`
  color: ${({ color }) => get(`buttons.${color}.color`)};
  background: transparent;
  box-shadow: unset;
  &:hover:not([disabled]) {
    background-color: ${({ color }) => get(`buttons.${color}.hover`)};
  }
`;

export const FilledButton = styled(StyledButton)`
  color: ${({ color }) => get(`buttons.${color}.background`)};
  background: ${({ color }) => get(`buttons.${color}.color`)};
  &:hover:not([disabled]) {
    background-color: ${({ color }) => get(`buttons.${color}.active`)};
  }
`;

export const StyledSpinner = styled((props) => <Spinner {...filterProps(props)} />)`
  .internal-circle,
  .external-circle {
    stroke: ${({ variant, color }) => (
    (variant === 'filled') ? get(`colors.${color}.4`) : get(`colors.${color}.0`)
  )}}
  position: absolute;
  display: ${({ isLoading }) => ((isLoading) ? 'block' : 'none')};
  width: calc(${({ scale }) => get(`heights.${scale}`)} - ${get('space.2')});
  height: calc(${({ scale }) => get(`heights.${scale}`)} - ${get('space.2')});
`;

export const StyledIconContainer = styled.span`
  visibility: ${({ isLoading }) => ((isLoading) ? 'hidden' : 'visible')};
  margin-left: ${({ position }) => (position === 'right') && get('space.2')};
  margin-right: ${({ position }) => (position === 'left') && get('space.2')};
  display: inline-flex;
  align-self: center;
`;

export const StyledButtonContent = styled.span`
  visibility: ${({ isLoading }) => ((isLoading) ? 'hidden' : 'visible')};
  > * {
    visibility: ${({ isLoading }) => ((isLoading) ? 'hidden' : 'visible')};
  }
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
