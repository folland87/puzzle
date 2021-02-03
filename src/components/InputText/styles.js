import React from 'react';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { get, filterProps } from '../utils';

export const StyledMessage = styled.p`
  font-family: ${get('fonts.primary')};
  line-height: ${get('lineHeights.copy')};
  font-size: ${get('fontSizes.tiny')};
  margin-top: ${get('space.1')};
  color: ${({ messageType }) => get(`colors.${messageType}`)};
  display: flex;
  align-items: center;
  > svg {
    font-size: 1.25em;
    margin-right: ${get('space.1')};
  }
`;

export const StyledLabel = styled.label`
  font-size: ${get('fontSizes.small')};
  font-weight: ${get('fontWeights.regular')};
  font-family: ${get('fonts.primary')};
  line-height: ${get('lineHeights.copy')};
  margin-bottom: ${get('space.2')};
  color: ${get('colors.dark.1')};
  &::after {
    content: ${({ isRequired }) => (isRequired) && '"*"'};
  }
`;

export const StyledInput = styled(React.forwardRef((props, ref) => <input ref={ref} {...filterProps(props)} />))`
  flex-grow: 1;
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)}};
  line-height: ${get('lineHeights.copy')};
  font-family: ${get('fonts.primary')};
  cursor: text;
  color: ${get('colors.dark.1')};
  background: transparent;
  border: 0;
  padding: ${get('space.2')} ${get('space.3')};
  padding-left: ${({ iconLeft }) => iconLeft && 0};
  padding-right: ${({ iconRight }) => iconRight && 0};
  &:focus {
    outline: 2px solid transparent;
  };
  &:disabled {
    cursor: default;
  };
  &:invalid {
    box-shadow: none;
  };
`;

export const StyledIconLeftContainer = styled((props) => <span {...filterProps(props)} />)`
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)}};
  padding: ${get('space.2')} ${get('space.3')};
`;
export const StyledIconRightContainer = styled((props) => <span {...filterProps(props)} />)`
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)}};
  padding: ${get('space.2')} ${get('space.3')};
`;
export const StyledInputWrapper = styled((props) => <div {...filterProps(props)} />)`
  margin: ${get('space.3')} 0;
  ${margin};
  width: ${({ width }) => width};
  display: inline-flex;
  flex-direction: column;
`;

export const StyledInputContainer = styled((props) => <div {...filterProps(props)} />)`
  color: ${get('colors.dark.3')};
  background-color: ${get('colors.light.2')};
  display: inline-flex;
  justify-content: start;
  align-items: center;
  box-shadow: inset 0 -2px 0 0 ${({ messageType }) => (
    messageType === 'text' ? get('colors.primary.1') : get(`colors.${messageType}`)
  )};
  border-top-left-radius: ${({ radius }) => get(`radius.${radius}`, radius)}};
  border-top-right-radius: ${({ radius }) => get(`radius.${radius}`, radius)}};

  &:focus-within {
    outline: 2px solid ${get('colors.focus')};
    outline-offset: 2px;
    > span > svg {
      color: ${get('colors.primary.1')};
    };
  };
  &:disabled {
    opacity: 0.2;
    cursor: default;
  };
`;
