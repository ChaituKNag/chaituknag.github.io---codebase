import React, { Fragment } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { GlobalStyle } from "./styled/global.styled";

const Layout = ({ location, title, children }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`;

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Header title={title} isHome={isHome} />
        {children}
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

export default Layout;
