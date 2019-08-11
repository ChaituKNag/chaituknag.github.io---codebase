import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import "./Bio.css";
import { rhythm } from "../utils/typography";

const iconStyle = {
  width: 30,
  height: 30,
  marginRight: 20,
  marginTop: 15
};

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;

        return (
          <div
            className="bio-box"
            style={{
              marginBottom: rhythm(1.5),
              padding: rhythm(0.8)
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className="bio-image"
              style={{
                marginRight: rhythm(1 / 2)
              }}
            />
            <p className="bio-author">
              Personal and technical views of <strong>{author}</strong> <br />
              {` `}
              <a
                className={`social-link`}
                target="_blank"
                rel="noreferrer"
                href={`https://twitter.com/${social.twitter}`}
              >
                <img className="bio-icon" src="/twitter.svg" alt="Twitter" />
              </a>
              {` `}
              <a
                className={`social-link`}
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${social.github}`}
              >
                <img className="bio-icon" src="/github.svg" alt="Github" />
              </a>
              {` `}
              <a
                className={`social-link`}
                target="_blank"
                rel="noreferrer"
                href={`https://www.instagram.com/${social.instagram}`}
              >
                <img
                  className="bio-icon"
                  src="/instagram.svg"
                  alt="Instagram"
                />
              </a>
              {` `}
              <a
                className={`social-link`}
                target="_blank"
                rel="noreferrer"
                href={`https://facebook.com/${social.facebook}`}
              >
                <img className="bio-icon" src="/facebook.svg" alt="Facebook" />
              </a>
              {` `}
              <a
                className={`social-link`}
                target="_blank"
                rel="noreferrer"
                href={`https://medium.com/${social.medium}`}
              >
                <img className="bio-icon" src="/medium.svg" alt="Medium" />
              </a>
            </p>
          </div>
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
