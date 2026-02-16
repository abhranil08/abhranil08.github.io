import React from "react";
import { materialDarkTheme, materialLightTheme } from "../theme";

const STORAGE_KEY = "portfolio-theme";

/** Default is dark; only return light when user explicitly chose "light". */
export function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light") return materialLightTheme;
  } catch (e) {}
  return materialDarkTheme;
}

export function storeTheme(theme) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      theme === materialLightTheme ? "light" : "dark"
    );
  } catch (e) {}
}

export const ThemeContext = React.createContext({
  theme: materialDarkTheme,
  isDark: true,
  toggleTheme: () => {},
});
