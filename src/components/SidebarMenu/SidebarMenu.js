import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiMenuLine } from 'react-icons/ri';

import { Button } from '../Button';
import { StyledSidebarMenu, StyledMenu } from './styles';

const SidebarMenu = ({ children, side }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <StyledMenu isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <Button
        onClick={() => setOpen(!isOpen)}
        secondary
        icon={<RiMenuLine />}
      />
      <StyledSidebarMenu isOpen={isOpen} side={side}>
        {children}
      </StyledSidebarMenu>
    </>
  );
};

SidebarMenu.propTypes = {
  /**
  * Side menu content
  */
  children: PropTypes.node.isRequired,
  /**
  * Sets the drawer position on the screen.
  */
  side: PropTypes.oneOf(['left', 'right']),
};

SidebarMenu.defaultProps = {
  side: 'right',
};

/* @component */
export default SidebarMenu;
