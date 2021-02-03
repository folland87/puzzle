import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { space, typography, color } from 'styled-system';
import { get, filterProps } from '../utils';

const Link = styled(({
  to,
  target,
  children,
  ...rest
}) => {
  const parser = document.createElement('a');
  parser.href = to;
  const isInternal = window.location.host === parser.host;
  if (isInternal) {
    return (
      <RouterLink to={to} {...filterProps(rest)}>
        {children}
      </RouterLink>
    );
  }
  return (
    <span>
      <a href={to} rel="noreferrer noopener" target={target} {...filterProps(rest)}>
        {children}
      </a>
    </span>
  );
})`
  border-bottom: 1px solid currentColor;
  text-decoration: none;
  letter-spacing: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  ${space};
  ${typography};
  ${color};
  &:focus {
    outline: 2px solid ${get('colors.focus')};
    outline-offset: 2px;
  }
`;

Link.propTypes = {
  target: PropTypes.string,
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  ...space.propTypes,
  ...color.propTypes,
  ...typography.propTypes,
};

Link.defaultProps = {
  target: '_blank',
  color: 'dark.1',
  size: 'regular',
  fontWeight: 'regular',
  fontSize: 'regular',
  fontFamily: 'primary',
  fontStyle: 'normal',
  lineHeight: 'copy',
};

export default Link;
