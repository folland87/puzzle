import React from 'react';
import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { space, typography, color } from 'styled-system';
import { get, filterProps } from '../../theme/getters';

const linkStyles = css`
  color: ${get('colors.link')};
  font-family: ${get('fonts.primary')};
  text-decoration: ${({ underline }) => (['always', 'not:hover'].includes(underline) ? 'underline' : 'none')};
  letter-spacing: -0.015em;
  ${space};
  ${typography};
  ${color};

  &:focus {
    outline: 2px solid ${get('colors.link')};
  }
  &:hover {
    text-decoration: ${({ underline }) => (['always', 'only:hover'].includes(underline) ? 'underline' : 'none')};
  }
`;

const StyledRouterLink = styled(({
  to,
  children,
  target,
  ...rest
}) => (
  <RouterLink to={to} {...filterProps(rest)}>
    {children}
  </RouterLink>
))`
  ${linkStyles}
`;
const StyledExternalLink = styled(({
  to,
  children,
  target,
  ...rest
}) => (
  <a href={to} rel="noreferrer noopener" target={target || '_blank'} {...filterProps(rest)}>
    {children}
  </a>
))`
  ${linkStyles}
`;

const Link = ({
  to,
  target,
  children,
  ...rest
}) => {
  const parser = document.createElement('a');
  parser.href = to;
  const isInternal = window.location.host === parser.host;
  const RenderLink = (isInternal) ? StyledRouterLink : StyledExternalLink;
  return (
    <RenderLink to={to} rel="noreferrer noopener" target={target || '_blank'} {...rest}>
      {children}
    </RenderLink>
  );
};

Link.propTypes = {
  /**
  * Link to ...
  */
  to: PropTypes.string,
  /**
  * Select the font type from the theme
  */
  underline: PropTypes.oneOf(['never', 'always', 'only:hover', 'not:hover']),
  ...space.propTypes,
  ...color.propTypes,
  ...typography.propTypes,
};

Link.defaultProps = {
  underline: 'only:hover',
};

export default Link;
