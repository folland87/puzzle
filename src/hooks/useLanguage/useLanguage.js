import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const LangContext = createContext();

export const LangContextProvider = ({ children, languages }) => {
  const storedLang = (
    localStorage.getItem('__doadds_lang__') || navigator.language.split(/[-_]/)[0]);
  const [lang, setLang] = useState(languages[storedLang]);

  const switchLanguage = (newLang) => {
    localStorage.setItem('__doadds_lang__', newLang);
    setLang(languages[newLang]);
  };

  return (
    <LangContext.Provider value={{ lang, languages, switchLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

LangContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  languages: PropTypes.string,
};

const useLanguage = () => useContext(LangContext);

/* @component */
export default useLanguage;
