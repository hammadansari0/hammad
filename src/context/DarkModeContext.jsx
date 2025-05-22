// import { createContext, useContext, useState } from "react";

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const useDarkMode = () => useContext(DarkModeContext);
import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
  const body = document.body;
  if (isDarkMode) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}, [isDarkMode]);


  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
