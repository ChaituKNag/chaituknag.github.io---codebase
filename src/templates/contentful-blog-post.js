import React, { Fragment } from "react";
import { graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { FullWidthDiv, SingleColumn } from "../components/styled/divs.styled";
import { InternalLink } from "../components/styled/links.styled";
import { MainHeader } from "../components/styled/headings.styled";

const StyledBlogPostInfo = styled.p`
  display: inline-block;
  border-top: 1px dotted #333;
  border-bottom: 1px dotted #333;
  margin: 0;
`;

const BlogLeadLinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const StyledBlogPostContent = styled.div`
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;

    &:active,
    &:focus,
    &:hover {
      text-decoration: underline;
    }

    display: inline-block;
  }

  h2 {
    color: ${props => props.theme.secondary};
    font-family: ${props => props.theme.fonts.headings};
  }

  h3 {
    color: ${props => props.theme.secondary};
    font-style: italic;
    font-family: ${props => props.theme.fonts.headings};
  }

  p,
  blockquote,
  li {
    line-height: 1.7rem;
  }

  .gatsby-resp-image-background-image {
    opacity: 1 !important;
  }
`;

const BlogPostInfo = ({ children }) => {
  return <StyledBlogPostInfo>{children}</StyledBlogPostInfo>;
};

const BlogPostContent = ({ post, theme }) => {
  return (
    <Fragment>
      <StyledBlogPostContent
        dangerouslySetInnerHTML={{
          __html: post.bodyText.childMarkdownRemark.html
        }}
      />
    </Fragment>
  );
};

const BlogPostWrapper = ({ post, previous, next }) => {
  return (
    <Fragment>
      <FullWidthDiv bg2>
        <SingleColumn flex justify="center" direction="column">
          <MainHeader>{post.title}</MainHeader>
          <BlogPostInfo>
            {post.createdOn} {` • `}
            {"☕".repeat(
              (post.bodyText.childMarkdownRemark.timeToRead - 1) / 5 + 1
            )}{" "}
            {`${post.bodyText.childMarkdownRemark.timeToRead} min read`}
          </BlogPostInfo>
        </SingleColumn>
      </FullWidthDiv>

      <FullWidthDiv>
        <SingleColumn>
          <BlogPostContent post={post} />
          <Bio />

          <BlogLeadLinkList>
            <li>
              {previous && (
                <InternalLink primary to={previous.slug} rel="prev">
                  ← {previous.title}
                </InternalLink>
              )}
            </li>
            <li>
              {next && (
                <InternalLink primary to={next.slug} rel="next">
                  {next.title} →
                </InternalLink>
              )}
            </li>
          </BlogLeadLinkList>
        </SingleColumn>
      </FullWidthDiv>
    </Fragment>
  );
};

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlogPost;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} description={post.spoiler} />
      <BlogPostWrapper post={post} previous={previous} next={next} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query createBlogPostDetailsPage($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(id: { eq: $id }) {
      title
      bannerImage {
        fluid {
          srcSet
        }
      }
      bodyText {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      createdOn(fromNow: true)
      tag
      updatedAt
      spoiler
    }
  }
`;
