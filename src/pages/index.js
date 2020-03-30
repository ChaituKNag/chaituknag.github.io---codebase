import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";

import styled from "styled-components";
import { SectionHeader } from "../components/styled/headings.styled";
import { FullWidthDiv, SingleColumn } from "../components/styled/divs.styled";
import { InternalLink } from "../components/styled/links.styled";

const BlogListHeader = styled.h3`
  margin-top: 2rem;
  margin-bottom: 0;
`;

const BlogListSection = ({ posts, postDataMapper }) => {
  return (
    <FullWidthDiv>
      <SingleColumn>
        <SectionHeader center>All Blog Posts</SectionHeader>
        {posts.map(({ node }) => {
          const {
            title,
            status,
            slug,
            date,
            timeToRead,
            spoiler
          } = postDataMapper(node);

          return status && status === "complete" ? (
            <div key={slug}>
              <BlogListHeader>
                <InternalLink primary to={slug}>
                  {title}
                </InternalLink>
              </BlogListHeader>
              <small>
                {date} • {"☕".repeat((timeToRead - 1) / 5 + 1)}{" "}
                {`${timeToRead} min read`}
              </small>
              <p
                dangerouslySetInnerHTML={{
                  __html: spoiler
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
  const contentfulPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      {/* <BlogListSection
        posts={posts}
        postDataMapper={node => ({
          title: node.frontmatter.title || node.fields.slug,
          status: node.frontmatter.status,
          slug: node.frontmatter.path || node.fields.slug,
          date: node.frontmatter.date,
          timeToRead: node.timeToRead,
          spoiler: node.frontmatter.spoiler || node.excerpt
        })}
      /> */}
      <BlogListSection
        posts={contentfulPosts}
        postDataMapper={node => ({
          title: node.title,
          status: node.published ? "complete" : "draft",
          slug: node.slug,
          date: node.createdOn,
          timeToRead: node.bodyText.childMarkdownRemark.timeToRead,
          spoiler: node.spoiler
        })}
      />
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { parent: { internal: { type: { eq: "File" } } } }
    ) {
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

    allContentfulBlogPost(
      sort: { fields: createdOn, order: DESC }
      limit: 100
      filter: { published: { eq: true } }
    ) {
      edges {
        node {
          slug
          title
          spoiler
          tag
          createdOn(fromNow: true)
          contentful_id
          createdOn(fromNow: true)
          updatedAt(fromNow: true)
          id
          published
          bodyText {
            childMarkdownRemark {
              timeToRead
            }
          }
        }
      }
    }
  }
`;
