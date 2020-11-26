import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import Link from '../Link';
import { getColor, getSpace, getFontWeight, filterProps } from '../../theme/getters';


const Tab = styled(Link)`
  border-bottom: ${(props) => (props.isActive) ? `4px solid` : null};
  padding: ${getSpace(1)} ${getSpace(3)};
  margin: 0 ${getSpace(2)};
  font-weight: ${({ isActive }) => isActive && getFontWeight('bold')};
  letter-spacing: 1px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    border-bottom: ${({ isActive }) => !isActive && `2px solid`};
  }
`;

const Tabs = styled((props) => (<nav { ...filterProps(props) } />))`
  ${space}
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid;
  border-color: #DDDDDD;
  > ${Tab} {
    border-color: ${getColor};
    color: ${getColor('text')};
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
}

Tabs.defaultProps = {
  color: 'primary',
}

export default Tabs;
