import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { get } from '../../theme/getters';
import useSelect from '../../hooks/useSelect';


/* Dropdown Content (Hidden by Default) */
export const DropdownMenu = styled.div`
  padding: ${get('space.2')} 0;
  margin: ${get('space.2')} 0;
  border-radius: ${({radius}) => get(`radius.${radius}`, radius)}};
  background: ${get('colors.background.4')};
  position: absolute;
  left: ${({direction}) => (direction === 'right') ? '0' : undefined};
  right: ${({direction}) => (direction === 'left') ? '0' : undefined};
  min-width: 200px;
  box-shadow: ${get('shadows.overlay')};
  z-index: 200;
  &:after, &:before {
    bottom: 100%;
    left: ${({direction}) => (direction === 'left') ? '90%' : '10%'};
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: ${get('colors.background.4')};
    border-width: 8px;
    margin-left: -8px;
  }
  &:before {
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-width: 9px;
    margin-left: -9px;
  }
  > a {
    font-family: ${get('fonts.primary')};
    display: flex;
    padding: 8px 16px;
    align-items:center;
    color: #000;
    cursor: pointer;
    background-color: ${get('colors.background.4')};
    &:focus {
      outline: 2px solid transparent;
      background-color: ${get('colors.primary.1')};
      color: ${get('colors.background.4')};
    };
    &:hover {
      background-color: ${get('colors.primary.1')};
      color: ${get('colors.background.4')};
    }
  }
`;

export const DropdownButton = styled('div').attrs({tabIndex: 0})`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  &:focus {
    outline: 2px solid transparent;
  }
`;

const DropdownContainer = styled.div`
  ${space}
  height: 100%;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const StyledOverlay = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Dropdown = ({ children, button, ...rest }) => {
  const selectRef = useRef(null);
  const optionsRef = useRef(null);
  const { toggle, isOpen, onKeyDown, onClick } = useSelect(selectRef, optionsRef);

  return (
    <DropdownContainer { ...rest }>
      <DropdownButton
        tabIndex={0}
        ref={selectRef}
        aria-expanded={isOpen}
        onKeyDown={(e) => toggle(e)}
        onClick={(e) => toggle(e)}
      >
        {button}
      </DropdownButton>
      {
        (isOpen)
          ? (
            <>
              <DropdownMenu
                tabIndex={-1}
                ref={optionsRef}
                onKeyDown={onKeyDown}
                onClick={onClick}
                { ...rest }
              >
                {children}
              </DropdownMenu>
              <StyledOverlay onClick={(e) => toggle(e)}/>
            </>
          )
          : null
      }
    </DropdownContainer>
  );
}
Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;


Dropdown.Menu.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  radius: PropTypes.string,
}

Dropdown.Menu.defaultProps = {
  direction: 'right',
  radius: 'regular',
}

export default Dropdown;
