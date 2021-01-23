import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, typography } from 'styled-system';
import { get, filterProps } from '../utils';

const Text = styled((props) => (<span type="button" {...filterProps(props)} />))`
  letter-spacing: -0.015em;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: baseline;
  ${space};
  ${typography};
  color: ${({ color }) => get(`colors.${color}`)};
`;

Text.propTypes = {
  /**
  * html element rendered by Text component
  */
  as: PropTypes.oneOf(['span', 'p', 'div', 'a', 'label']),
};

Text.defaultProps = {
  color: 'dark.3',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  fontFamily: 'primary',
  lineHeight: '1.75',
};

export default Text;
