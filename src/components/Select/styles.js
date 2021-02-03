import React from 'react';
import styled from 'styled-components';
import { get, filterProps } from '../utils';

export const StyledSelect = styled(React.forwardRef((props, ref) => (<div ref={ref} {...filterProps(props)} />)))`
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)}};
  line-height: ${get('lineHeights.inputs')};
  border-radius: ${({ radius }) => get(`radius.${radius}`, radius)}};
  font-family: ${get('fonts.primary')};
  cursor: pointer;
  color: ${get('colors.dark.0')};
  background: ${get('colors.light.1')};
  display: inline-flex;
  min-width: 200px;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${get('space.3')};
  ${({ error }) => error && 'border: 1px solid red;'};
  &:focus-within {
    outline: 2px solid transparent;
    box-shadow: ${get('shadows.overlay')};
    background-color: ${get('colors.light.0')};
  };
  &:disabled {
    opacity: 0.2;
    cursor: default;
  };
  > svg {
    padding-left: 16px;
  };
`;

export const StyledList = styled(React.forwardRef((props, ref) => (<ul ref={ref} {...props} />)))`
  list-style: none;
  left: 0;
  right: 0;
  padding: 8px 0;
  margin: 8px 0;
  border-radius: 4px;
  background: ${get('colors.light.0')};
  position: absolute;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  z-index: 200;
  box-shadow: ${get('shadows.overlay')};
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
  font-family: "Marianne", sans-serif;
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)}};
  line-height: ${get('lineHeights.inputs')};
  display: flex;
  padding: 0 16px;
  align-items:center;
  color: #000;
  cursor: pointer;
  background-color: ${get('colors.light.0')};
  &:focus {
    outline: 2px solid transparent;
    background-color: #5770be;
    color: ${get('colors.light.0')};
  }
  &:hover {
    background-color: #5770be;
    color: ${get('colors.light.0')};
  }
`;

export const StyledSelectWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;
