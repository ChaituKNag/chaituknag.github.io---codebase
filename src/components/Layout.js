import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import useTheme from "../hooks/useTheme";
import { ThemeContext } from "../utils/theme-context";

import { rhythm } from "../utils/typography";
import styled, { css } from "styled-components";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "inherit")};
  transition: background-color 0.5s;
  ${({ theme }) => {
    if (theme === "dark") {
      return css`
        blockquote {
          color: #fff;
          border-color: violet;
        }

        a:hover {
          color: #fff;
        }
      `;
    }
  }}
`;

const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`0 ${rhythm(3 / 4)} ${rhythm(1.5)}`};
`;

const Layout = ({ location, title, children }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`;
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LayoutWrapper theme={theme}>
        <LayoutContainer>
          <Header title={title} isHome={isHome} />
          {children}
          <Footer />
        </LayoutContainer>
      </LayoutWrapper>
    </ThemeContext.Provider>
  );
};

export default Layout;
