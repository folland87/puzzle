import styled from 'styled-components';
import { get } from '../utils';

export const StyledOverlay = styled.div`
  background-color: rgba(80, 80, 80, 0.5);
  min-height: 100vh;
  min-width: 100%;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

export const StyledModal = styled.dialog`
  display: flex;
  flex-direction: column;
  border: 0;
  background: ${get('colors.light.0')};
  border-radius: 4px;
  min-width: 30rem;
  z-index: 2000;
  margin-top: 100px;
  box-shadow: 0 16px 16px 0 rgba(80, 80, 80, 0.25);
`;
