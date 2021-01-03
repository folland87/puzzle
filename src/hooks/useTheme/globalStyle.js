import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.dark[0]};
    color: ${({ theme }) => theme.colors.light[0]};
  }
`;
