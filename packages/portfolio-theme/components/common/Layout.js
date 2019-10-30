import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --bright-yellow-crayola: #FF9F1C;
    --rose-madder: #E71D36;
    --maximum-blue-green: #2EC4B6;
    --baby-powder: #FDFFFC;
    --maastricht-blue: #011627;
    --box-shadow-for-button: rgba(1, 22, 39, 10%);
  }
`;

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
