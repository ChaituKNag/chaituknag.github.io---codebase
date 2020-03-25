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
`;

const BlogPostInfo = ({ children }) => {
  return <StyledBlogPostInfo>{children}</StyledBlogPostInfo>;
};

const BlogPostContent = ({ post, theme }) => {
  return (
    <Fragment>
      <StyledBlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
    </Fragment>
  );
};

const BlogPostWrapper = ({ post, previous, next }) => {
  return (
    <Fragment>
      <FullWidthDiv bg2>
        <SingleColumn flex justify="center" direction="column">
          <MainHeader>{post.frontmatter.title}</MainHeader>
          <BlogPostInfo>
            {post.frontmatter.date} {` • `}
            {"☕".repeat((post.timeToRead - 1) / 5 + 1)}{" "}
            {`${post.timeToRead} min read`}
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
                <InternalLink
                  primary
                  to={previous.frontmatter.path || previous.fields.slug}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </InternalLink>
              )}
            </li>
            <li>
              {next && (
                <InternalLink
                  primary
                  to={next.frontmatter.path || next.fields.slug}
                  rel="next"
                >
                  {next.frontmatter.title} →
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
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler || post.excerpt}
      />
      <BlogPostWrapper post={post} previous={previous} next={next} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      timeToRead
    }
  }
`;
