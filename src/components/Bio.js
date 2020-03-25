import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { FullWidthDiv, SingleColumn } from "./styled/divs.styled";
import { ExternalLink } from "./styled/links.styled";
import { Button } from "@material-ui/core";

const BioImageBox = styled.div`
  margin: 30px;
  border-radius: 50%;
  max-width: 300px;
  width: 300px;
  box-shadow: 5px 5px 20px -10px ${props => props.theme.fg};
  border: 10px solid white;
  overflow: hidden;
  flex: 1;

  @media screen and (max-width: ${props => props.theme.breaks.sm}) {
    width: 200px;
    margin: 20px;
  }
`;

const BioImage = styled(Image)`
  margin-bottom: 0;
  width: 100%;
  border-radius: 100%;
`;

const BioAuthor = styled.span`
  margin: 0;
`;

const BioIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 8px 10px;
  display: inline-block;
`;

const PortfolioButton = styled(Button)`
  display: block;
  border-color: ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  text-transform: capitalize;
  margin-top: 30px;
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;

        return (
          <Fragment>
            <FullWidthDiv bg2>
              <SingleColumn flex justify="center" direction="column">
                <BioImageBox>
                  <BioImage
                    fluid={data.avatar.childImageSharp.fluid}
                    alt={author}
                  />
                </BioImageBox>
                <div>
                  {`Personal and technical views of  `}&nbsp;
                  <strong>{author}</strong>
                </div>
              </SingleColumn>
              <SingleColumn flex justify="center">
                <BioAuthor>
                  <br />
                  {` `}
                  <ExternalLink
                    target="_blank"
                    rel="noreferrer"
                    href={`https://twitter.com/${social.twitter}`}
                  >
                    <BioIcon
                      className="bio-icon"
                      src="/twitter.svg"
                      alt="Twitter"
                    />
                  </ExternalLink>
                  {` `}
                  <ExternalLink
                    target="_blank"
                    rel="noreferrer"
                    href={`https://github.com/${social.github}`}
                  >
                    <BioIcon
                      className="bio-icon"
                      src="/github.svg"
                      alt="Github"
                    />
                  </ExternalLink>
                  {` `}
                  <ExternalLink
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.instagram.com/${social.instagram}`}
                  >
                    <BioIcon
                      className="bio-icon"
                      src="/instagram.svg"
                      alt="Instagram"
                    />
                  </ExternalLink>
                  {` `}
                  <ExternalLink
                    target="_blank"
                    rel="noreferrer"
                    href={`https://facebook.com/${social.facebook}`}
                  >
                    <BioIcon
                      className="bio-icon"
                      src="/facebook.svg"
                      alt="Facebook"
                    />
                  </ExternalLink>
                  {` `}
                  <ExternalLink
                    target="_blank"
                    rel="noreferrer"
                    href={`https://medium.com/${social.medium}`}
                  >
                    <BioIcon
                      className="bio-icon"
                      src="/medium.svg"
                      alt="Medium"
                    />
                  </ExternalLink>
                </BioAuthor>
              </SingleColumn>
              <SingleColumn flex justify="center">
                <PortfolioButton
                  component="a"
                  href="https://thebestdeveloper.me"
                  rel="noreferrer"
                  target="_blank"
                  variant="outlined"
                >
                  Looking for my portfolio?
                </PortfolioButton>
              </SingleColumn>
            </FullWidthDiv>
          </Fragment>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
          facebook
          instagram
          medium
        }
      }
    }
  }
`;

export default Bio;
