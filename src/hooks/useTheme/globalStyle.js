import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.light[1]};
    color: ${({ theme }) => theme.colors.dark[3]};
    font-size: ${({ theme }) => theme.fontSizes.regular};
  }
`;
