import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../../utils/typography";
import "./Header.css";

const ThemeButton = ({ theme, toggleTheme }) => {
  return (
    <button
      className="header-theme-button"
      onClick={toggleTheme}
      title="Change Theme"
    >
      {theme === "dark" ? "Light - 🌞" : "Dark - 🌑"}
    </button>
  );
};

const Header = ({ isHome = false, title, toggleTheme, theme }) => {
  return (
    <>
      {isHome && (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            paddingTop: rhythm(1.5)
          }}
          className="home-header"
        >
          <Link className="home-header-link" to={`/`}>
            {title}
          </Link>
          <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        </h1>
      )}
      {!isHome && (
        <h3
          className="blog-header"
          style={{
            padding: `${rhythm(1)} 0`
          }}
        >
          {title}
          <span>
            <ThemeButton theme={theme} toggleTheme={toggleTheme} />
            {` | `}
            <Link to={`/`} className="blog-header-link">
              {" "}
              Home{" "}
            </Link>
          </span>
        </h3>
      )}
    </>
  );
};

export default Header;
