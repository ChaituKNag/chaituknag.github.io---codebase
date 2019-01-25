import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata

        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <p>
              Personal and technical views of <strong>{author}</strong>
              {` `}
              <a target="_blank" rel="noreferrer" href={`https://twitter.com/${social.twitter}`}>twitter</a>
              {` • `}
              <a target="_blank" rel="noreferrer" href={`https://github.com/${social.github}`}>github</a>
              {` • `}
              <a target="_blank" rel="noreferrer" href={`https://www.instagram.com/${social.instagram}`}>instagram</a>
              {` • `}
              <a target="_blank" rel="noreferrer" href={`https://facebook.com/${social.facebook}`}>fb</a>
            </p>
          </div>
        )
      }}
    />
  )
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
        }
      }
    }
  }
`

export default Bio
