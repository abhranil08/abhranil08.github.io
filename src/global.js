import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: ${({ theme }) =>
      theme.body === "#020617"
        ? "radial-gradient(circle at 0% 0%, #0f172a, #020617 55%, #000000 100%)"
        : "linear-gradient(180deg, #f8f5ff 0%, #E9E3F5 50%, #ffffff 100%)"};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background 0.35s ease, color 0.35s ease;
  }`;
