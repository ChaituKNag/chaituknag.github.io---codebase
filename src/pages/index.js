import React, { useContext, useEffect } from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import styled, { css } from "styled-components";
import { ThemeContext } from "../utils/theme-context";
import useTheme from "../hooks/useTheme";

const BlogListSection = styled.div`
  a {
    background-image: ${props =>
      props.theme === "dark"
        ? css`linear-gradient(
      to top,
      #f03b95,
      #333 100%,
      #0000 100%,
      #0000
    )`
        : css`linear-gradient(to top,#e896bf,#fff 100%,#0000 100%,#0000)
    `};
    color: #429aff;
  }
`;

const BlogIndex = ({ data, location }) => {
  const [theme] = useTheme();

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      <BlogListSection theme={theme}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const { status } = node.frontmatter;
          return status && status === "complete" ? (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={node.frontmatter.path || node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date} •{" "}
                {"☕".repeat((node.timeToRead - 1) / 5 + 1)}{" "}
                {`${node.timeToRead} min read`}
              </small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.spoiler || node.excerpt
                }}
              />
            </div>
          ) : null;
        })}
      </BlogListSection>

      {posts.length === 0 && <p>The fun has not yet begun!</p>}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            spoiler
            status
          }
          timeToRead
        }
      }
    }
  }
`;
