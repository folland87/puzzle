import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import {
  StyledCallout,
  StyledCalloutIcon,
  StyledCalloutContent,
} from './styles';

// Toast component
// ==============================
const Callout = ({
  title, color, icon, children,
}) => (
  <StyledCallout color={color}>
    {icon && <StyledCalloutIcon>{icon}</StyledCalloutIcon>}
    <StyledCalloutContent>
      {title && <Text mb={1} fontWeight="bold" fontSize="large">{title}</Text>}
      <Text>{children}</Text>
    </StyledCalloutContent>
  </StyledCallout>
);

Callout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOf(['string', 'node']).isRequired,
  color: PropTypes.string,
};
Callout.defaultProps = {
  title: null,
  color: null,
};

export default Callout;
