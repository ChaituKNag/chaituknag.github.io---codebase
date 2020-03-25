import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { FullWidthDiv, SingleColumn } from "../components/styled/divs.styled";

const StyledBlogPostInfo = styled.p`
  display: inline-block;
  border-top: 1px dotted #333;
  border-bottom: 1px dotted #333;
`;

const StyledHr = styled.hr``;

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
`;

const BlogLeadLinkItem = styled(Link)`
  background-image: linear-gradient(
    to top,
    #e896bf,
    #fff 100%,
    #0000 100%,
    #0000
  );
`;

const BlogPostInfo = ({ children }) => {
  return <StyledBlogPostInfo>{children}</StyledBlogPostInfo>;
};

const BlogPostContent = ({ post, theme }) => {
  return (
    <Fragment>
      <StyledBlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <StyledHr />
    </Fragment>
  );
};

const BlogPostWrapper = ({ post, previous, next }) => {
  return (
    <FullWidthDiv>
      <SingleColumn>
        <h1>{post.frontmatter.title}</h1>
        <BlogPostInfo>
          {post.frontmatter.date} {` • `}
          {"☕".repeat((post.timeToRead - 1) / 5 + 1)}{" "}
          {`${post.timeToRead} min read`}
        </BlogPostInfo>
        <BlogPostContent post={post} />
        <Bio />

        <BlogLeadLinkList>
          <li>
            {previous && (
              <BlogLeadLinkItem
                to={previous.frontmatter.path || previous.fields.slug}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </BlogLeadLinkItem>
            )}
          </li>
          <li>
            {next && (
              <BlogLeadLinkItem
                to={next.frontmatter.path || next.fields.slug}
                rel="next"
              >
                {next.frontmatter.title} →
              </BlogLeadLinkItem>
            )}
          </li>
        </BlogLeadLinkList>
      </SingleColumn>
    </FullWidthDiv>
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
