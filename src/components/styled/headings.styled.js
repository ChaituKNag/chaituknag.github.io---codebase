import styled from "styled-components";

export const MainHeader = styled.h1`
  text-align: ${props => (props.center ? "center" : "left")};
  font-size: 2rem;
  font-family: ${props => props.theme.fonts.headings}, cursive;

  @media screen and (max-width: ${props => props.theme.breaks.sm}) {
    font-size: 1.5rem;
  }
`;

export const SectionHeader = styled.h2`
  text-align: ${props => (props.center ? "center" : "left")};
  font-size: 1.5rem;
  font-family: ${props => props.theme.fonts.headings}, cursive;

  @media screen and (max-width: ${props => props.theme.breaks.sm}) {
    font-size: 1.2rem;
  }
`;

export const Caption = styled.span`
  color: ${props => props.theme.secondary};
  font-size: 1.6rem;
  @media screen and (max-width: ${props => props.theme.breaks.sm}) {
    font-size: 1.2rem;
  }
`;
