import styled from 'styled-components';
import { get } from '../utils';

export const StyledCheckboxContainer = styled.div`
  display: inline-flex;
  align-items: start;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const StyledHiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  justify-content: flex-start;
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 24px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 24px;
  opacity: 0;
  z-index: 20;
`;

export const StyledCheckbox = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  width: ${get('space.4')};
  height: ${get('space.4')};
  background: ${({ checked }) => (checked ? get('colors.primary.1') : 'transparent')};
  color: white;
  border-radius: 4px;
  transition: all 150ms;
  box-shadow: 0 0 0 1px ${get('colors.dark.1')};

  ${StyledHiddenCheckbox}:focus + & {
    outline: 2px solid ${get('colors.focus')};
    outline-offset: 2px;
  }

  ${StyledHiddenCheckbox}:disabled + & {
    background: ${get('colors.dark.4')};
    box-shadow: inset 0 0 0 2px ${get('colors.dark.4')};
  }

  > svg {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')}
    color: white;
    font-size: 16px;
  }
`;
