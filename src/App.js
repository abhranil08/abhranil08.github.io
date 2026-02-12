import React, { useState, useMemo, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { materialDarkTheme, materialLightTheme } from "./theme";
import { GlobalStyles } from "./global";
import { ThemeContext, getStoredTheme, storeTheme } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(getStoredTheme);
  const isDark = theme === materialDarkTheme;

  const toggleTheme = () => {
    setTheme((prev) => {
      const next =
        prev === materialDarkTheme ? materialLightTheme : materialDarkTheme;
      storeTheme(next);
      return next;
    });
  };

  const contextValue = useMemo(
    () => ({ theme, isDark, toggleTheme }),
    [theme, isDark]
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main theme={theme} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
