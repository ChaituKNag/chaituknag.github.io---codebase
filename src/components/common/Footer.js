import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ThemeContext } from "../../utils/theme-context";

const RedHeart = styled.span`
  color: red;
`;

const StyledHr = styled.hr`
  body.dark & {
    background-color: #fff;
  }
`;

const Footer = () => {
  return (
    <div>
      <StyledHr />
      <footer>
        © {new Date().getFullYear()} -- with
        <RedHeart>{` ❤ `}</RedHeart>
        from K.N.C
      </footer>
    </div>
  );
};

export default Footer;
