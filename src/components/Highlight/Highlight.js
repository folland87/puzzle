import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { get, filterProps } from '../utils';
import Text from '../Text';

const StyledHighlight = styled((props) => <div {...filterProps(props)} />)`
  background: 'transparent';
  border-radius: ${get('radius.sharp')};
  margin: ${get('space.3')} 0;
  display: flex;
  flexWrap: nowrap;
  align-items: center;
  border-left: ${get('space.1')} solid ${({ color }) => get(`colors.${color}`)};
`;

// Toast component
// ==============================
const Highlight = ({ color, fontSize, children }) => (
  <StyledHighlight color={color}>
    <Text mx={3} my={1} fontSize={fontSize}>
      {children}
    </Text>
  </StyledHighlight>
);

Highlight.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

Highlight.defaultProps = {
  color: 'primary.1',
  fontSize: 'regular',
};

export default Highlight;
