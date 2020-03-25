import React from "react";
import styled, { css } from "styled-components";

const RedHeart = styled.span`
  color: red;
`;

const StyledHr = styled.hr``;

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
