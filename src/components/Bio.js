import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { FullWidthDiv, SingleColumn } from "./styled/divs.styled";
import { ExternalLink } from "./styled/links.styled";

const BioBox = styled.div`
  display: flex;
  box-shadow: 0 2px 14px -4px rgba(0, 0, 0, 0.3);
`;

const BioImageBox = styled.div`
  margin-right: 30px;
`;

const BioImage = styled(Image)`
  margin-bottom: 0;
  width: 100%;
  border-radius: 100%;
`;

const BioAuthor = styled.span`
  margin: 0;
`;

const SocialLink = styled.a`
  background-image: none;
`;

const BioIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 8px 10px;
  display: inline-block;
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
              <SingleColumn flex justify="center">
                <BioImageBox>
                  <BioImage
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author}
                  />
                </BioImageBox>
                {`Personal and technical views of  `}&nbsp;
                <strong>{author}</strong>
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
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
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
