const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(
    `
      query Posts {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
              id
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  const component = path.resolve(`./src/templates/post/index.tsx`);
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    actions.createPage({
      component,
      context: {
        id: post.node.id,
        next,
        previous,
      },
      path: post.node.fields.slug,
    });
  });

  return result;
};

exports.onCreateNode = ({ actions, getNode, node }) => {
  // On all mdx nodes, create a slug field with the given file path as a value
  if (node.internal.type === 'Mdx') {
    const filePath = createFilePath({ node, getNode });

    // Prepend `/blog` to the slug if the MDX file is under src/posts
    // By default the filepath of an MDX file is just /[filename]/
    const slug = node.fileAbsolutePath.includes(`${__dirname}/src/posts`)
      ? `/blog${filePath}`
      : filePath;

    actions.createNodeField({
      name: 'slug',
      node,
      value: slug,
    });
  }
};
