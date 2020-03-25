import React from "react";
import { MainHeader, Caption } from "../styled/headings.styled";
import { InternalLink } from "../styled/links.styled";

const Header = ({ isHome = false, title }) => {
  return (
    <>
      {isHome && (
        <MainHeader center>
          {title}
          <Caption>'s blog</Caption>
        </MainHeader>
      )}
      {!isHome && (
        <MainHeader center>
          <InternalLink primary to={`/ `}>
            {title}
          </InternalLink>
          <Caption>'s blog</Caption>
        </MainHeader>
      )}
    </>
  );
};

export default Header;
