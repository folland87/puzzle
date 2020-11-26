import React from 'react';
import PropTypes from 'prop-types';
import StyledSpinner from './styles';

const Spinner = (props) => (
  <StyledSpinner viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle className="internal-circle" cx="60" cy="60" r="30"></circle>
    <circle className="external-circle" cx="60" cy="60" r="50"></circle>
  </StyledSpinner>
);

Spinner.propTypes = {
  /**
   * Styled-system size generated width=height=props.size
   */
  size: PropTypes.number,
  /**
   * Spinner color from the theme
   */
  color: PropTypes.string,
};

Spinner.defaultProps = {
  size: 32,
  color: null,
};

export default Spinner;
