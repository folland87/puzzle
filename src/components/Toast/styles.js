import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { get, filterProps } from '../utils';

const toastRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;
const toastLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;
const toastTop = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;
const toastBottom = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;
const unfill = keyframes`from { height: 100%; } to { height: 0% }`;

const getAnimation = (position) => {
  switch (position) {
    case 'top-right': return css`
      animation: ${toastRight} .3s;
      `;
    case 'bottom-right': return css`
      animation: ${toastRight} .3s;
      `;
    case 'top-left': return css`
      animation: ${toastLeft} .3s;
      `;
    case 'top-center': return css`
      animation: ${toastTop} .3s;
      `;
    case 'bottom-center': return css`
      animation: ${toastBottom} .3s;
      `;
    default: return css`
      animation: ${toastLeft} .3s;
      `;
  }
};

export const StyledToast = styled((props) => <div {...filterProps(props)} />)`
  position: relative;
  background: ${get('colors.light.0')};
  box-shadow: ${get('shadows.raised')};
  border-radius: ${get('radius.regular')};
  margin: ${get('space.3')};
  display: flex;
  flexWrap: nowrap;
  align-items: flex-start;
  min-height: 40px;
  width: 320px;
  ${({ position }) => getAnimation(position)};
`;

export const StyledProgressBar = styled.div`
  animation: ${unfill} ${({ autoDismissAfter }) => autoDismissAfter}ms linear;
  animation-play-state: ${({ paused }) => ((paused) ? 'paused' : 'running')};
  bottom: 0;
  left: 0;
  position: absolute;
  width: ${get('space.6')};
  background: rgba(0,0,0,.1);
`;

export const StyledColoredBox = styled.div`
  border-bottom-left-radius: ${get('radius.regular')};
  border-top-left-radius: ${get('radius.regular')};
  width: ${get('space.6')};
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ toastType }) => get(`colors.${toastType}.1`)};
  > svg {
    color: ${get('colors.light.1')};
    z-index: 100;
    font-size: 1.3em;
  }
`;

export const StyledToastContent = styled.div`
  margin-left: ${get('space.6')};
  width: 100%;
  display: flex;
  padding: ${get('space.2')};
  flex-direction: column;
  justify-content: space-between;
`;
