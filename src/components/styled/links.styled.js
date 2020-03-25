import styled from "styled-components";
import { Link } from "gatsby";

export const InternalLink = styled(Link)`
  color: ${props =>
    props.primary ? props.theme.primary : props.theme.secondary};
  text-decoration: none;

  &:active,
  &:focus,
  &:hover {
    text-decoration: ${props => props.decoration || "underline"};
  }
`;

export const ExternalLink = styled.a`
  color: ${props =>
    props.primary ? props.theme.primary : props.theme.secondary};
  text-decoration: none;

  &:active,
  &:focus,
  &:hover {
    text-decoration: ${props => props.decoration || "underline"};
  }

  display: inline-block;
`;
