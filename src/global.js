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
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: color 0.35s ease;
    position: relative;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* High-res technology-themed background + semi-transparent overlay for readability (darker in dark mode, lighter in light) */
    ${({ theme }) =>
      theme.body === "#020617"
        ? `
    background-image:
      linear-gradient(180deg, rgba(2, 6, 23, 0.88) 0%, rgba(15, 23, 42, 0.82) 35%, rgba(2, 6, 23, 0.92) 100%),
      url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85');
    `
        : `
    background-image:
      linear-gradient(180deg, rgba(252, 250, 255, 0.92) 0%, rgba(240, 235, 250, 0.88) 40%, rgba(255, 255, 255, 0.94) 100%),
      url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85');
    `}
    transition: opacity 0.35s ease;
  }`;
