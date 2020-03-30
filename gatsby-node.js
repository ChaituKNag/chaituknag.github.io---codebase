const {
  // createMdPages,
  createSlugForMdPages
} = require("./page-utils/create-mark-down-pages");
const {
  createContentfulBlogPostPage
} = require("./page-utils/create-contentful-pages");

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return Promise.all([
    // createMdPages(graphql, createPage),
    createContentfulBlogPostPage(graphql, createPage)
  ]);
};

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  createSlugForMdPages(node, getNode, createNodeField);
};
