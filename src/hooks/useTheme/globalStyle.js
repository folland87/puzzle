import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: "Marianne";
    background: ${({theme}) => theme.colors.background[0]};
    color: ${({theme}) => theme.colors.text[0]};
  }
`;
