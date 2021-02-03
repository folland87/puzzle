import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space, typography, color } from 'styled-system';
import { get } from '../utils';

const styledHeadings = css`
  letter-spacing: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${get('colors.dark.1')};
  line-height: ${get('lineHeights.title')};
  padding: ${get('space.2')} 0;
  margin: 0;
  ${space};
  ${typography};
  ${color};
`;

export const H1 = styled.h1`
  font-size: ${get('fontSizes.h1')};
  @media (min-width: ${get('breakpoints.1')}) {
    font-size: 44px;
  };
  ${styledHeadings}
`;

export const H2 = styled.h2`
  font-size: ${get('fontSizes.h2')};
  ${styledHeadings}
`;
export const H3 = styled.h3`
  font-size: ${get('fontSizes.h3')};
  ${styledHeadings}
`;
export const H4 = styled.h4`
  font-size: ${get('fontSizes.h4')};
  ${styledHeadings}
  line-height: ${get('lineHeights.subtitle')};
`;

export const Title = ({
  htmlTag, titleStyle, children, ...rest
}) => {
  switch (titleStyle) {
    case 'H2': return <H2 as={htmlTag} {...rest}>{children}</H2>;
    case 'H3': return <H3 as={htmlTag} {...rest}>{children}</H3>;
    case 'H4': return <H4 as={htmlTag} {...rest}>{children}</H4>;
    default: return <H1 as={htmlTag} {...rest}>{children}</H1>;
  }
};

Title.propTypes = {
  /**
  * html element rendered by Text component
  */
  htmlTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  style: PropTypes.oneOf(['H1', 'H2', 'H3', 'H4']).isRequired,
  children: PropTypes.node.isRequired,
  ...space.propTypes,
  ...color.propTypes,
  ...typography.propTypes,
};
