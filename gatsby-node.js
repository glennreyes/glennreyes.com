const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(
    `
      query Posts {
        posts: allMdx(
          filter: { fileAbsolutePath: { glob: "**/content/posts/**" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            fields {
              slug
            }
            id
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog post pages
  const postComponent = require.resolve('./src/templates/post/index.tsx');
  const posts = result.data.posts.nodes;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    actions.createPage({
      component: postComponent,
      context: {
        id: post.id,
        next,
        previous,
      },
      path: post.fields.slug,
    });
  });

  return result;
};

exports.onCreateNode = ({ actions, getNode, node }) => {
  // On all mdx nodes, create a slug field with the given file path as a value
  if (node.internal.type === 'Mdx') {
    const filePath = createFilePath({ node, getNode });

    // Prepend `/blog` to the slug if the MDX file is under content/posts
    // By default the filepath of an MDX file is just /[filename]/
    const slug = node.fileAbsolutePath.includes(`${__dirname}/content/posts`)
      ? `/blog${filePath}`
      : filePath;

    actions.createNodeField({
      name: 'slug',
      node,
      value: slug,
    });
  }
};
