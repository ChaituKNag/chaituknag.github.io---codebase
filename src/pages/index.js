import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";

import styled from "styled-components";
import { SectionHeader } from "../components/styled/headings.styled";
import { FullWidthDiv, SingleColumn } from "../components/styled/divs.styled";

const StyledBlogListSection = styled.div`
  padding: 3rem 0;
`;

const BlogListHeader = styled.h3``;

const BlogListHeaderLink = styled(Link)`
  box-shadow: none;
`;

const BlogListSection = ({ posts }) => {
  return (
    <FullWidthDiv>
      <SingleColumn>
        <SectionHeader center>All Blog Posts</SectionHeader>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const { status } = node.frontmatter;
          return status && status === "complete" ? (
            <div key={node.fields.slug}>
              <BlogListHeader>
                <BlogListHeaderLink
                  to={node.frontmatter.path || node.fields.slug}
                >
                  {title}
                </BlogListHeaderLink>
              </BlogListHeader>
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
      </SingleColumn>
    </FullWidthDiv>
  );
};

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      <BlogListSection posts={posts} />
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
