import React, { useContext } from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../../utils/typography";
import { ThemeContext } from "../../utils/theme-context";
import styled, { css } from "styled-components";

const ThemeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "inherit")};
`;

const HomeHeader = styled.h1`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.5s;
  margin-bottom: ${rhythm(1.5)};
  padding-top: ${rhythm(1.5)};
  font-size: ${scale(0.5)};
  line-height: ${scale(0.5)};
`;

const SingleBlogHeader = styled.h3`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 9px 13px -10px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};
  transition: background-color 0.5s;
  z-index: 10;
  padding: ${rhythm(1)} 0;
`;

const BlogHeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
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
          <Link to={`/`}>{title}</Link>
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
