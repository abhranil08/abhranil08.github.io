import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Navigation = () => {
  const scrolled = useScrollPosition(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <ThemeContext.Consumer>
      {({ isDark, toggleTheme }) => (
        <nav className={`nav ios-nav ${scrolled ? "scrolled" : ""}`}>
          <div className="nav-container">
            <Link to="/" className="logo" onClick={closeMobileMenu}>
              Abhranil
            </Link>

            <ul className="nav-links desktop-only">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>

            <div className="nav-right desktop-only">
              <button
                type="button"
                className="theme-toggle ios-theme-toggle"
                onClick={toggleTheme}
                aria-label={
                  isDark ? "Switch to light theme" : "Switch to dark theme"
                }
                title={isDark ? "Light mode" : "Dark mode"}
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </div>

            <button
              type="button"
              className="mobile-menu-btn mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mobile-menu">
              <ul className="mobile-nav-links">
                {navLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link to={href} onClick={closeMobileMenu}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="theme-toggle ios-theme-toggle mobile-theme-toggle"
                onClick={() => {
                  toggleTheme();
                  closeMobileMenu();
                }}
                aria-label={
                  isDark ? "Switch to light theme" : "Switch to dark theme"
                }
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </div>
          )}
        </nav>
      )}
    </ThemeContext.Consumer>
  );
};

export default Navigation;
