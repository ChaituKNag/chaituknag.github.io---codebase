import React, { useContext } from "react";
import { Link } from "gatsby";
import { rhythm, themedAnchorUnderline } from "../../utils/typography";
import { ThemeContext } from "../../utils/theme-context";
import styled from "styled-components";

const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: inherit;
  body.dark & {
    color: #fff;
  }
`;

const HomeHeader = styled.h1`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.1s;
  margin-bottom: ${rhythm(1.5)};
  padding-top: ${rhythm(1.5)};
`;

const SingleBlogHeader = styled.h3`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 9px 13px -10px;
  position: sticky;
  top: 0;
  background-color: "#fff";
  transition: background-color 0.1s;
  z-index: 10;
  padding: ${rhythm(1)} 0;
  body.dark & {
    background-color: #333;
  }
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

  body.dark & {
    background-image: linear-gradient(
      to top,
      #f03b95,
      #333 100%,
      #0000 100%,
      #0000
    );
  }
`;

const Header = ({ isHome = false, title }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      {isHome && (
        <HomeHeader>
          {title}
          <ThemeButton theme={theme} onClick={toggleTheme} title="Change Theme">
            {theme === "dark" ? "Light - 🌞" : "Dark - 🌑"}
          </ThemeButton>
        </HomeHeader>
      )}
      {!isHome && (
        <SingleBlogHeader theme={theme}>
          <BlogHeaderLink to={`/ `}>{title}</BlogHeaderLink>
          <span>
            <ThemeButton
              theme={theme}
              onClick={toggleTheme}
              title="Change Theme"
            >
              {theme === "dark" ? "Light - 🌞" : "Dark - 🌑"}
            </ThemeButton>
          </span>
        </SingleBlogHeader>
      )}
    </>
  );
};

export default Header;
