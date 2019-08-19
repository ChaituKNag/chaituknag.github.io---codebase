import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ThemeContext } from "../../utils/theme-context";

const RedHeart = styled.span`
  color: red;
`;

const StyledHr = styled.hr`
  ${({ theme }) =>
    theme === "dark" &&
    css`
      background-color: #fff;
    `}
`;

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <StyledHr theme={theme} />
      <footer>
        © {new Date().getFullYear()} -- with
        <RedHeart theme={theme}>{` ❤ `}</RedHeart>
        from K.N.C
      </footer>
    </div>
  );
};

export default Footer;
