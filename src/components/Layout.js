import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";

import { rhythm } from "../utils/typography";

const Layout = ({ location, title, children }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`;

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`
      }}
    >
      {isHome ? <Header isHome title={title} /> : <Header title={title} />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
