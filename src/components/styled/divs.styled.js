import styled from "styled-components";

export const FullWidthDiv = styled.div`
  margin: 0;
  background-color: ${props => (props.bg2 ? props.theme.bg2 : props.theme.bg)};
  padding: 40px 0;
`;

export const SingleColumn = styled.div`
  max-width: ${props => props.theme.breaks.md};
  margin: 0 auto;
  padding: 0 40px;
  display: ${props => (props.flex ? "flex" : "block")};
  align-items: center;
  justify-content: ${props => props.justify || "left"};
`;
