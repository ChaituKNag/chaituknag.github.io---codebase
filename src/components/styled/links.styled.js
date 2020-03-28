import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledInternalLink = styled(Link)`
  text-decoration: none;

  &:active,
  &:focus,
  &:hover {
    text-decoration: ${props => props.decoration || "underline"};
  }
`;

const PrimaryInternalLink = styled(StyledInternalLink)`
  color: ${props => props.theme.primary};
`;
const SecondaryInternalLink = styled(StyledInternalLink)`
  color: ${props => props.theme.secondary};
`;

export const InternalLink = ({ primary, ...restProps }) =>
  primary ? (
    <PrimaryInternalLink {...restProps} />
  ) : (
    <SecondaryInternalLink {...restProps} />
  );

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
