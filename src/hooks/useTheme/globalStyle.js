import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    color: #303303
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.background[0]};
    color: ${({ theme }) => theme.colors.text[0]};
  }
`;
