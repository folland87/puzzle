import styled from 'styled-components';

export const StyledSidebarMenu = styled.div`
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  min-width: 256px;
  max-width: 400px;
  z-index: 200;
  box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
  transform: ${({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
  transition: transform 0.3s ease-out;
  transition-delay: 0.2s;
`;

export const StyledSidebarDrawer = styled.div`
  background-color: rgba(0,0,0,.75);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top:0;
  right:0;
  z-index: 50;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.1s ease-out;
`;
