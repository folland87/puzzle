import { createGlobalStyle } from 'styled-components';

import MarianneThin from './Marianne/Marianne-Thin.woff2';
import MarianneLight from './Marianne/Marianne-Light.woff2';
import MarianneRegular from './Marianne/Marianne-Regular.woff2';
import MarianneMedium from './Marianne/Marianne-Medium.woff2';
import MarianneBold from './Marianne/Marianne-Bold.woff2';
import MarianneExtrabold from './Marianne/Marianne-ExtraBold.woff2';


export default createGlobalStyle`
@font-face {
  font-family: 'Marianne';
  font-style:  normal;
  font-weight: 400;
  src: local('Marianne'), url(${MarianneRegular}) format("woff2");
}
@font-face {
  font-family: 'Marianne';
  font-style:  normal;
  font-weight: 300;
  src: local('Marianne'), url(${MarianneLight}) format("woff2");
}

@font-face {
  font-family: 'Marianne';
  font-style:  normal;
  font-weight: 500;
  src: local('Marianne'), url(${MarianneMedium}) format("woff2");
}
@font-face {
  font-family: 'Marianne';
  font-style:  normal;
  font-weight: 200;
  src: local('Marianne'), url(${MarianneThin}) format("woff2");
}

@font-face {
  font-family: 'Marianne';
  font-style:  normal;
  font-weight: 700;
  src: local('Marianne'), url(${MarianneBold}) format("woff2");
}
@font-face {
  font-family: 'Marianne';
  font-style:  italic;
  font-weight: 800;
  src: local('Marianne'), url(${MarianneExtrabold}) format("woff2");
}
`;
