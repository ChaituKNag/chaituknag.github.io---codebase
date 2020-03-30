const path = require("path");
const blogPost = path.resolve(`./src/templates/contentful-blog-post.js`);

exports.createContentfulBlogPostPage = function(graphql, createPage) {
  return graphql(`
    query createBlogPostPage {
      allContentfulBlogPost(
        filter: { published: { eq: true } }
        sort: { fields: createdOn, order: DESC }
      ) {
        edges {
          node {
            slug
            id
            title
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      throw res.errors;
    }

    const posts = res.data.allContentfulBlogPost.edges;

    posts.forEach(({ node }, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: node.slug,
        component: blogPost,
        context: {
          id: node.id,
          previous,
          next
        }
      });
    });
  });
};
