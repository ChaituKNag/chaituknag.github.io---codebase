import styled from "styled-components";

export const SubHeader = styled.h2`
  color: var(--maastricht-blue);
  font-family: "Garamond", serif;
  font-size: 25px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 75px;
    height: 2px;
    background-color: var(--maastricht-blue);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
