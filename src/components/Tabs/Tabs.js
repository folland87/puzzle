import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import Link from '../Link';
import { get, filterProps } from '../utils';

const Tab = styled(Link)`
  border-bottom: ${(props) => ((props.isActive) ? '4px solid' : null)};
  padding: ${get('space.1')} ${get('space.3')};
  margin: 0 ${get('space.2')};
  font-weight: ${({ isActive }) => isActive && get('fontWeights.bold')};
  letter-spacing: 1px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    border-bottom: ${({ isActive }) => !isActive && '2px solid'};
  }
`;

const Tabs = styled((props) => (<nav {...filterProps(props)} />))`
  ${space}
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid;
  border-color: #DDDDDD;
  > ${Tab} {
    border-color: ${({ color }) => get(`colors.${color}`)};
    color: ${get('colors.dark.1')};
  }
`;
Tabs.Tab = Tab;

Tabs.propTypes = {
  /**
  * Tab underline color
  */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
};

Tabs.defaultProps = {
  color: 'primary',
};

export default Tabs;
