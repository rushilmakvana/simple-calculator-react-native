import React, { createContext, useEffect, useState } from "react";

export const Theme = createContext({
  isLightTheme: true,
  changeTheme: (value) => {},
});

const ThemecontextProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(false);
  function changeTheme(value) {
    // console.log("called");
    setLightTheme(value);
  }

  const value = {
    isLightTheme: lightTheme,
    changeTheme: changeTheme,
  };
  return <Theme.Provider value={value}>{children}</Theme.Provider>;
};

export default ThemecontextProvider;
