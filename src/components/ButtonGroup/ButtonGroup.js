import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get, filterProps } from '../../theme/getters';

/**
 * The doadds button group.
 *
 * @version 0.0.1
 * @author [Frédéric Olland](https://github.com/folland87)
 */

const ButtonGroup = styled((props) => (<div {...filterProps(props)} />))`
  display: inline-flex;
  flex-wrap: 0;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: ${get('shadows.out')};
  border-radius: ${get('radius.regular')};
  > button {
    box-shadow: unset;
  };
  > button:focus {
    border: 0;
  };
  > button:not(:first-child):not(:last-child) {
    border-right: 1px solid rgba(0,0,0,.1);
    border-left: 1px solid rgba(0,0,0,.1);
    border-radius: 0;
    &:focus {
      border-color: transparent;
    };
  };
  > button:last-child {
    border-right: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  };
  > button:first-child {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

ButtonGroup.propTypes = {
  /**
  * One of themes radii for button border-radius
  */
  radius: PropTypes.oneOf(['regular', 'rounded', 'double']),
};

ButtonGroup.defaultProps = {
  radius: 'regular',
};

/* @component */
export default ButtonGroup;
