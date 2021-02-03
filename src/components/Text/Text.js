import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, typography, color } from 'styled-system';
import { filterProps } from '../utils';

const Text = styled((props) => (<p {...filterProps(props)} />))`
  letter-spacing: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  ${space};
  ${typography};
  ${color};
`;

Text.propTypes = {
  /**
  * html element rendered by Text component
  */
  as: PropTypes.oneOf(['span', 'p', 'label']),
  ...space.propTypes,
  ...color.propTypes,
  ...typography.propTypes,
};

Text.defaultProps = {
  as: 'p',
  color: 'dark.1',
  size: 'regular',
  fontWeight: 'regular',
  fontFamily: 'primary',
  fontStyle: 'normal',
  lineHeight: 'copy',
};

export default Text;
