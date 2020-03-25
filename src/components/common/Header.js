import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const HomeHeader = styled.h1`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.5s;
`;

const SingleBlogHeader = styled.h3`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 9px 13px -10px;
  position: sticky;
  top: 0;
  background-color: #fff;
  transition: background-color 0.5s;
  z-index: 10;
`;

const BlogHeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  background-image: linear-gradient(
    to top,
    #e896bf,
    #fff 100%,
    #0000 100%,
    #0000
  );
`;

const Header = ({ isHome = false, title }) => {
  return (
    <>
      {isHome && <HomeHeader>{title}</HomeHeader>}
      {!isHome && (
        <SingleBlogHeader>
          <BlogHeaderLink to={`/ `}>{title}</BlogHeaderLink>
        </SingleBlogHeader>
      )}
    </>
  );
};

export default Header;
