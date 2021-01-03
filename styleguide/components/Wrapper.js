import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContextProvider, ToastContextProvider } from '../../src';
import GlobalFonts from '../../src/hooks/useTheme/globalFonts';

const Wrapper = ({ children }) => (
  <Router>
    <ThemeContextProvider>
      <GlobalFonts />
      <ToastContextProvider position="top-center">
        {children}
      </ToastContextProvider>
    </ThemeContextProvider>
  </Router>
);

export default Wrapper;
