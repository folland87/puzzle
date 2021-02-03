import { createGlobalStyle } from 'styled-components';

import MarianneLightItalic from '../../fonts/Marianne/Marianne-Light_Italic.woff2';
import MarianneLight from '../../fonts/Marianne/Marianne-Light.woff2';
import MarianneRegular from '../../fonts/Marianne/Marianne-Regular.woff2';
import MarianneRegularItalic from '../../fonts/Marianne/Marianne-Regular_Italic.woff2';
import MarianneBold from '../../fonts/Marianne/Marianne-Bold.woff2';
import MarianneBoldItalic from '../../fonts/Marianne/Marianne-Bold_Italic.woff2';
import SpectralExtrabold from '../../fonts/Spectral/Spectral-ExtraBold.woff2';
import SpectralRegular from '../../fonts/Spectral/Spectral-Regular.woff2';

export default createGlobalStyle`
@font-face {
  font-family: 'Marianne';
  src: local('Marianne'), url(${MarianneLight}) format("woff2");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Marianne';
  src: local('Marianne'), url(${MarianneLightItalic}) format("woff2");
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: 'Marianne';
  src: local('Marianne'), url(${MarianneRegular}) format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Marianne';
  src: local('Marianne'), url(${MarianneRegularItalic}) format("woff2");
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: 'Marianne';
  src: local('Marianne'), url(${MarianneBold}) format("woff2");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Marianne';
  src: local('Marianne'), url(${MarianneBoldItalic}) format("woff2");
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: 'Spectral';
  src: local('Spectral'), url(${SpectralRegular}) format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Spectral';
  src: local('Spectral'), url(${SpectralExtrabold}) format("woff2");
  font-weight: 900;
  font-style: normal;
}
`;
