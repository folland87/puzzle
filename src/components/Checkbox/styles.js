import styled from 'styled-components';
import { get } from '../utils';

export const StyledCheckboxContainer = styled.div`
  display: inline-flex;
  align-items: start;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const StyledHiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 20px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 20px;
  opacity: 0;
  z-index: 20;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  padding-left: 8px;
  font-family: ${get('fonts.primary')};
  height: 23px;
  color: ${({ disabled }) => ((disabled) ? get('colors.dark.1') : get('colors.dark.3'))};
`;
export const StyledCheckbox = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  width: 18px;
  height: 18px;
  background: ${({ checked }) => (checked ? get('colors.primary.1') : get('colors.light.2'))};
  color: white;
  border-radius: 4px;
  transition: all 150ms;
  box-shadow: ${get('shadows.out')};

  ${StyledHiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${get('colors.focus')};
  }

  ${StyledHiddenCheckbox}:disabled + & {
    background: ${get('colors.dark.4')};
    box-shadow: inset 0 0 0 2px ${get('colors.dark.4')};
  }

  > svg {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')}
    color: white;
    font-size: 14px;
  }
`;
