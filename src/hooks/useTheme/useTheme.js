import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
// import GlobalFonts from './fonts';
import GlobalStyle from './globalStyle';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../theme/defaultTheme';
// import darkTheme from '../../theme/darkTheme';
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children, themes }) => {
  const storedTheme = localStorage.getItem('__doadds_theme__') || 'default';
  const [theme, setTheme] = useState(themes[storedTheme]);

  const switchTheme = (newTheme) => {
    localStorage.setItem('__doadds_theme__', newTheme);
    setTheme(themes[newTheme]);
  };

  // <GlobalFonts />
  return (
    <ThemeContext.Provider value={{ theme, themes, switchTheme }}>
      <GlobalStyle theme={theme} />
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  themes: PropTypes.object,
};
ThemeContextProvider.defaultProps = {
  themes: { default: defaultTheme },
};

const useTheme = () => useContext(ThemeContext);

/* @component */
export default useTheme;
