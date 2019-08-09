import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";

import { rhythm } from "../utils/typography";
import layoutStyles from "./Layout.module.css";

const Layout = ({ location, title, children }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`;

  return (
    <div className={layoutStyles.layout}>
      <div
        className={layoutStyles.layoutWrapper}
        style={{
          maxWidth: rhythm(24),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`
        }}
      >
        {isHome ? <Header isHome title={title} /> : <Header title={title} />}
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
