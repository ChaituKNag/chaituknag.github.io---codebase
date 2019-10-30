import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "Garamond", serif;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  background-color: var(--maastricht-blue);
  color: var(--baby-powder);
`;

const Header = () => {
  return <StyledHeader>Naga Chaitanya Konada</StyledHeader>;
};

export default Header;
