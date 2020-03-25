import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";

import styled, { css } from "styled-components";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  color: inherit;
`;

const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Layout = ({ location, title, children }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`;

  return (
    <LayoutWrapper>
      <LayoutContainer>
        <Header title={title} isHome={isHome} />
        {children}
        <Footer />
      </LayoutContainer>
    </LayoutWrapper>
  );
};

export default Layout;
