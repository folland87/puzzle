import React from 'react';
import styled from 'styled-components';

import { get, filterProps } from '../utils';

export const StyledCallout = styled((props) => <div {...filterProps(props)} />)`
  position: relative;
  background: ${get('colors.light.2')};
  border-radius: ${get('radius.sharp')};
  margin: ${get('space.3')} 0;
  flexWrap: nowrap;
  align-items: flex-start;
  min-height: 45px;
  background: ${({ color }) => color && get(`colors.${color}.3`)};
  border-left: ${get('space.1')} solid ${({ color }) => (color ? get(`colors.${color}.1`) : get('colors.primary.1'))};
`;

export const StyledCalloutIcon = styled.div`
  position: absolute;
  font-size: ${get('fontSizes.large')};
  color: ${get('colors.dark.1')};
  top: ${get('space.2')};
  left: ${get('space.2')};
`;

export const StyledCalloutContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${get('space.5')} ${get('space.6')};
`;
