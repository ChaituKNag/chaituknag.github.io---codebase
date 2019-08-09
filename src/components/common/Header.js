import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../../utils/typography";

const Header = ({ isHome = false, title }) => {
  return (
    <div>
      {isHome && (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            paddingTop: rhythm(1.5)
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )}
      {!isHome && (
        <h3
          style={{
            marginTop: 0,
            display: "flex",
            justifyContent: "space-between",
            padding: `${rhythm(1)} 0`,
            boxShadow: `rgba(0, 0, 0, 0.1) 0px 9px 13px -10px`,
            position: `sticky`,
            top: `0px`
          }}
        >
          {title}
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`
            }}
            to={`/`}
          >
            {" "}
            Home{" "}
          </Link>
        </h3>
      )}
    </div>
  );
};

export default Header;
