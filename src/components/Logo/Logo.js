import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, size } from 'styled-system';
import { get } from '../../theme/getters';
import logo from './logo.svg';


const alt = "Ministère de l'enseignement supérieur, de la recherche et de l'innovation"
const Logo = styled((props) => <img src={logo} alt={alt} {...props} />)`
  ${margin};
  ${size};
  background-color: #ffffff;
  padding: ${get('space.3')};
`;

export default Logo;

Logo.propTypes = {
  height: PropTypes.number,
}

Logo.defaultProps = {
  height: 200,
}
