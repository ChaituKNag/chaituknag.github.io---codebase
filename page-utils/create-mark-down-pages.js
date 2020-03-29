const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const blogPost = path.resolve(`./src/templates/blog-post.js`);

exports.createMdPages = function(graphql, createPage) {
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { status: { eq: "complete" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                path
                status
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.frontmatter.path || post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      });
    });
  });
};

exports.createSlugForMdPages = function(node, getNode, createNodeField) {
  const parent = getNode(node.parent);

  if (
    node.internal.type === `MarkdownRemark` &&
    parent.internal.type === "File"
  ) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
