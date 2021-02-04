import React from 'react';
import styled from 'styled-components';
import { get, filterProps } from '../utils';

export const StyledSelect = styled(React.forwardRef((props, ref) => (<div ref={ref} {...filterProps(props)} />)))`
  color: ${get('colors.dark.3')};
  background-color: ${get('colors.light.2')};
  display: inline-flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)}};
  line-height: ${get('lineHeights.copy')};
  align-items: center;
  padding: ${get('space.2')} ${get('space.3')};
  box-shadow: inset 0 -2px 0 0 ${({ messageType }) => (
    messageType ? get(`colors.${messageType}`) : get('colors.primary.1')
  )};
  border-top-left-radius: ${({ radius }) => get(`radius.${radius}`, radius)}};
  border-top-right-radius: ${({ radius }) => get(`radius.${radius}`, radius)}};
  min-width: 250px;
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
  ${({ error }) => error && 'border: 1px solid red;'};
  > svg {
    padding-left: 16px;
    font-size: ${get('fontSizes.large')}
  };
`;

export const StyledList = styled(React.forwardRef((props, ref) => (<ul ref={ref} {...props} />)))`
  list-style: none;
  top: 100%;
  left: 0;
  padding: 0;
  margin: 0;
  background: ${get('colors.light.0')};
  position: absolute;
  min-width: 100%;
  max-height: 300px;
  overflow-y: auto;
  z-index: 200;
  box-shadow: ${get('shadows.overlay')};
  &:before {

  };
  > li:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 1rem;
    height: 1px;
    background-color: ${get('colors.light.3')};
  }
`;

export const StyledOverlay = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const StyledOption = styled.li`
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)}};
  margin: 8px 0;
  padding: 4px 16px;
  cursor: pointer;
  &:focus {
    outline: 2px solid ${get('colors.focus')};
    outline-offset: 2px;
    color: ${get('colors.primary.1')};
    box-shadow: inset 4px 0 0 0 ${get('colors.primary.1')};
  }
  &:hover {
    color: ${get('colors.primary.1')};
    box-shadow: inset 4px 0 0 0 ${get('colors.primary.1')};
  }
`;

export const StyledSelectWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;
