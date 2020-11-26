import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space } from 'styled-system';
import { getColor, filterProps } from '../../theme/getters';

export const Separator = styled((props) => (<div {...filterProps(props)} />))`
  ${space};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: ${getColor};
  background-color: ${getColor};
`;

Separator.propTypes = {
  /**
  * Sets the separator color
  */
  color: PropTypes.string,
  /**
  * Sets the separator height. Accept any valid css value
  */
  height: PropTypes.string,
  /**
  * Sets the separator width. Accept any valid css value
  */
  width: PropTypes.string,
  /**
  * Styled-sytem margins. Use the shortcuts m, mx, my, mt, mb, mr, ml
  */
  m: PropTypes.number,
  /**
  * Styled-sytem paddings. Use the shortcuts p, px, py, pt, pb, pr, pl
  */
  p: PropTypes.number,
};

Separator.defaultProps = {
  color: 'text',
  height: '1px',
  width: undefined,
  m: 0,
  p: 0,
};

export default Separator;
