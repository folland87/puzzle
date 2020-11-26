import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaBars } from 'react-icons/fa';

import Button from '../Button';
import { StyledSidebarMenu, StyledSidebarDrawer} from './styles';

const Drawer = ({ children, side }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <StyledSidebarDrawer isOpen={isOpen} onClick={() => setOpen(!isOpen)}/>
      <Button
        onClick={() => setOpen(!isOpen)}
        scale='large'
        color='secondary'
        icon={<FaBars />}
      />
      <StyledSidebarMenu isOpen={isOpen} side={side}>
        {children}
      </StyledSidebarMenu>
    </>
  )
};


Drawer.propTypes = {
  /**
  * Sets the drawer position on the screen.
  */
  side: PropTypes.oneOf(['left', 'right']),
}

Drawer.defaultProps = {
  side: 'right',
}

/* @component */
export default Drawer;
