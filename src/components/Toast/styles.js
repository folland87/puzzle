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
  border-radius: ${get('radius.sharp')};
  margin: ${get('space.3')};
  display: flex;
  flexWrap: nowrap;
  align-items: flex-start;
  min-height: 40px;
  width: 320px;
`;

export const StyledProgressBar = styled.div`
  animation: ${unfill} ${({ autoDismissAfter }) => autoDismissAfter}ms linear;
  animation-play-state: ${({ paused }) => ((paused) ? 'paused' : 'running')};
  bottom: 0;
  left: 0;
  position: absolute;
  width: ${get('space.2')};
  background: rgba(0,0,0,.1);
`;

export const StyledToastIcon = styled.span`
  position: absolute;
  font-size: ${get('fontSizes.large')};
  color: ${get('colors.dark.0')};
  top: ${get('space.2')};
  left: ${get('space.3')};
`;

export const StyledCloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledColoredBox = styled.div`
  width: ${get('space.2')};
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ toastType }) => get(`colors.${toastType}`)};
`;

export const StyledToastContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
