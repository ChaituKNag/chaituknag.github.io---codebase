import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import useTheme from "../hooks/useTheme";

import { rhythm } from "../utils/typography";
import "./Layout.css";

const Layout = ({ location, title, children }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`;
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={theme === "dark" ? "layout-dark" : "layout"}>
      <div
        className={`layout-wrapper`}
        style={{
          maxWidth: rhythm(24),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`
        }}
      >
        {isHome ? (
          <Header
            isHome
            title={title}
            toggleTheme={toggleTheme}
            theme={theme}
          />
        ) : (
          <Header title={title} toggleTheme={toggleTheme} theme={theme} />
        )}
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
