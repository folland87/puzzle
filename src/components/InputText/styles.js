import React from 'react';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { get, filterProps } from '../utils';

export const StyledMessage = styled.p`
  font-family: ${get('fonts.primary')};
  line-height: '1.75';
  font-size: ${get('fontSizes.small')};
  margin-top: ${get('space.1')};
  color: ${({ messageType }) => get(`colors.${messageType}.1`)};
  display: flex;
  align-items: center;
  > svg {
    font-size: 1.25em;
    margin-right: ${get('space.1')};
  }
`;

export const StyledLabel = styled.p`
  font-size: ${get('fontSizes.small')};
  font-weight: ${get('fontWeights.medium')};
  font-family: ${get('fonts.primary')};
  line-height: '1.75';
  margin-bottom: ${get('space.1')};
  color: ${get('colors.dark.1')};
  &::after {
    content: ${({ isRequired }) => (isRequired) && '"*"'};
    color: ${get('colors.danger.1')};
  }
`;

export const StyledInput = styled(React.forwardRef((props, ref) => <input ref={ref} {...filterProps(props)} />))`
  flex-grow: 1;
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)}};
  height: ${({ scale }) => get(`heights.${scale}`)}};
  font-family: ${get('fonts.primary')};
  min-width: 40px;
  cursor: text;
  color: ${get('colors.dark.1')};
  background: transparent;
  border: 0;
  &:focus {
    outline: 2px solid transparent;
  };
  &:disabled {
    cursor: default;
  };
`;

export const StyledIconLeftContainer = styled((props) => <span {...filterProps(props)} />)`
  margin-right: ${get('space.2')};
`;
export const StyledIconRightContainer = styled((props) => <span {...filterProps(props)} />)`
  margin-left: ${get('space.2')};
  align-self: right;
`;
export const StyledInputWrapper = styled((props) => <div {...filterProps(props)} />)`
  ${margin};
  width: ${({ width }) => width};
  display: inline-flex;
  flex-direction: column;
`;

export const StyledInputContainer = styled((props) => <div {...filterProps(props)} />)`
  color: ${get('colors.dark.1')};
  background-color: ${get('colors.light.1')};
  display: inline-flex;
  justify-content: start;
  align-items: center;
  padding: 0 ${get('space.3')};
  border-radius: ${({ radius }) => get(`radius.${radius}`, radius)}};
  &:focus-within {
    outline: 2px solid transparent;
    box-shadow: ${get('shadows.raised')};
    background-color: ${get('colors.light.0')};
    > span > svg {
      color: ${get('colors.primary.1')};
    };
  };
  &:disabled {
    opacity: 0.2;
    cursor: default;
  };
`;
