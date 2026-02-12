import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { ThemeContext } from "../../context/ThemeContext";
//import Achievement from '../../containers/achievement/Achievement';

class Header extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.props.theme;
    const { isDark, toggleTheme } = this.context;
    const link = settings.isSplash ? "/splash" : "home";
    const nameParts = greeting.title.split(" ");
    const initials =
      nameParts[0].charAt(0) + (nameParts[1] ? nameParts[1].charAt(0) : "");
    const firstName = nameParts[0];
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header" style={{ "--nav-active-bg": theme.highlight, "--nav-hover-bg": theme.highlight }}>
            <NavLink to={link} tag={Link} className="logo">
              <span className="logo-mark">{initials}</span>
              <div className="logo-text">
                <span className="logo-name" style={{ color: theme.text }}>
                  {firstName}
                </span>
                <span className="logo-subtitle">Software Engineer</span>
              </div>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  isActive={(match, location) => location.pathname === "/" || location.pathname === "/home"}
                  activeClassName="nav-link-active"
                  style={{ color: theme.text }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeClassName="nav-link-active"
                  style={{ color: theme.text }}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeClassName="nav-link-active"
                  style={{ color: theme.text }}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeClassName="nav-link-active"
                  style={{ color: theme.text }}
                >
                  Projects
                </NavLink>
              </li>
              {<li>
                <NavLink
                  to="/achievements"
                  tag={Link}
                  activeClassName="nav-link-active"
                  style={{ color: theme.text }}
                >
                  Achievements
                </NavLink>
              </li>}
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeClassName="nav-link-active"
                  style={{ color: theme.text }}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
