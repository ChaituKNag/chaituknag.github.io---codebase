import React, { useContext } from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { rhythm } from "../utils/typography";
import styled, { css } from "styled-components";
import { ThemeContext } from "../utils/theme-context";

const BioBox = styled.div`
  display: flex;
  box-shadow: ${({ theme }) =>
    theme === "dark"
      ? "0 2px 14px -4px rgba(255, 255, 255, .3)"
      : "0 2px 14px -4px rgba(0, 0, 0, .3)"};
  margin-bottom: ${rhythm(1.5)}
  padding: ${rhythm(0.8)}
`;

const BioImage = styled(Image)`
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
  margin-right: ${rhythm(1 / 2)};
`;

const BioAuthor = styled.p`
  margin: 0;
`;

const SocialLink = styled.a`
  background-image: none;
`;

const BioIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 8px 10px;
`;

function Bio() {
  const { theme } = useContext(ThemeContext);
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;

        return (
          <BioBox theme={theme}>
            <BioImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
            <BioAuthor>
              Personal and technical views of <strong>{author}</strong> <br />
              {` `}
              <SocialLink
                target="_blank"
                rel="noreferrer"
                href={`https://twitter.com/${social.twitter}`}
              >
                <BioIcon
                  className="bio-icon"
                  src="/twitter.svg"
                  alt="Twitter"
                />
              </SocialLink>
              {` `}
              <SocialLink
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${social.github}`}
              >
                <BioIcon className="bio-icon" src="/github.svg" alt="Github" />
              </SocialLink>
              {` `}
              <SocialLink
                target="_blank"
                rel="noreferrer"
                href={`https://www.instagram.com/${social.instagram}`}
              >
                <BioIcon
                  className="bio-icon"
                  src="/instagram.svg"
                  alt="Instagram"
                />
              </SocialLink>
              {` `}
              <SocialLink
                target="_blank"
                rel="noreferrer"
                href={`https://facebook.com/${social.facebook}`}
              >
                <BioIcon
                  className="bio-icon"
                  src="/facebook.svg"
                  alt="Facebook"
                />
              </SocialLink>
              {` `}
              <SocialLink
                target="_blank"
                rel="noreferrer"
                href={`https://medium.com/${social.medium}`}
              >
                <BioIcon className="bio-icon" src="/medium.svg" alt="Medium" />
              </SocialLink>
            </BioAuthor>
          </BioBox>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
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
