import React from "react";
import styled from "styled-components";
import { FullWidthDiv, SingleColumn } from "../styled/divs.styled";

const RedHeart = styled.span`
  color: red;
`;

const Footer = () => {
  return (
    <footer>
      <FullWidthDiv bg2>
        <SingleColumn>
          © {new Date().getFullYear()} -- with
          <RedHeart>{` ❤ `}</RedHeart>
          from K.N.C
        </SingleColumn>
      </FullWidthDiv>
    </footer>
  );
};

export default Footer;
