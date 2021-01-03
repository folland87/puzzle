import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, typography, color } from 'styled-system';
import { filterProps } from '../utils';

const Text = styled((props) => (<span type="button" {...filterProps(props)} />))`
  letter-spacing: -0.015em;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: baseline;
  ${space};
  ${typography};
  ${color};
`;

Text.propTypes = {
  /**
  * html element rendered by Text component
  */
  as: PropTypes.oneOf(['span', 'p', 'div', 'a', 'label']),
};

Text.defaultProps = {
  color: 'dark.1',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  fontFamily: 'primary',
  lineHeight: '1.75',
};

export default Text;
