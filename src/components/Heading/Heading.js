import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import {
  getFontSize,
  getFontWeight,
  getColor,
  getFont,
  filterProps
} from '../../theme/getters';

const StyledHeading = styled(({ element: TextElement, children, ...props }) => (
  <TextElement {...filterProps(props)}>
    {children}
  </TextElement>
))`
  ${space};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${getFont};
  color: ${getColor};
  text-decoration: ${({ decoration }) => decoration};
`;

const Heading = ({ as, children, ...props }) => (
  <StyledHeading element={as} { ...props }>
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  /**
  * html element rendered by Heading component
  */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div']),
  /**
  * Text color from the theme
  */
  color: PropTypes.string,
  /**
  * Select the font type from the theme
  */
  font: PropTypes.oneOf(['primary', 'code']),
  /**
  * Define the font size inside the text from the theme
  */
  fontSize: PropTypes.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'huge',
    'hero',
  ]),
  /**
  * Define the font weight inside the text from the theme
  */
  fontWeight: PropTypes.oneOf(['thin', 'regular', 'bold', 'extrabold']),
  /**
  * Define text alignment -- accepts valid css properties
  */
  textAlign: PropTypes.string,
  /**
  * Define text line height -- accepts valid css properties
  */
  lineHeight: PropTypes.string,
  /**
  * Define text decoration -- accepts valid css properties
  */
  decoration: PropTypes.string,
}

Heading.defaultProps = {
  as: 'div',
  color: 'darker',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  textAlign: 'left',
  font: 'primary',
  lineHeight: '1.3',
  decoration: "none",
}

export default Text;
