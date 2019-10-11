import React, { useContext } from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { rhythm, themedAnchorUnderline } from "../utils/typography";
import styled, { css } from "styled-components";
import { ThemeContext } from "../utils/theme-context";

const StyledBlogPostInfo = styled.p`
  display: inline-block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(0)};
  border-top: 1px dotted ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
  border-bottom: 1px dotted
    ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
  padding-top: ${rhythm(0)};
  font-size: ${rhythm(0.5)};
`;

const StyledHr = styled.hr`
  margin-bottom: ${rhythm(1)};
  ${({ theme }) =>
    theme === "dark" &&
    css`
      background-color: #fff;
    `}
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
    ${({ theme }) => themedAnchorUnderline(theme)}
  }
`;

const BlogLeadLinkItem = styled(Link)`
  ${({ theme }) => themedAnchorUnderline(theme)}
`;

const BlogPostInfo = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <StyledBlogPostInfo theme={theme}>{children}</StyledBlogPostInfo>;
};

const BlogPostContent = ({ post, theme }) => {
  return (
    <>
      <StyledBlogPostContent
        theme={theme}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <StyledHr theme={theme} />
    </>
  );
};

const BlogPostWrapper = ({ post, previous, next }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <BlogPostInfo>
        {post.frontmatter.date} {` • `}
        {"☕".repeat((post.timeToRead - 1) / 5 + 1)}{" "}
        {`${post.timeToRead} min read`}
      </BlogPostInfo>
      <BlogPostContent post={post} theme={theme} />
      <Bio />

      <BlogLeadLinkList>
        <li>
          {previous && (
            <BlogLeadLinkItem
              theme={theme}
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
              theme={theme}
              to={next.frontmatter.path || next.fields.slug}
              rel="next"
            >
              {next.frontmatter.title} →
            </BlogLeadLinkItem>
          )}
        </li>
      </BlogLeadLinkList>
    </>
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
        banner={post.frontmatter.bannerUrl}
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
        bannerUrl
      }
      timeToRead
    }
  }
`;
