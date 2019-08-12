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

exports.createSchemaCustomization = ({ actions, schema }) => {
  const typeDefs = [
    `
      type Location implements Node {
        address: String
        latitude: Float
        longitude: Float
        name: String
        city: String!
        country: String!
      }

      type TalkEvent implements Node {
        endDate: Date
        id: ID!
        isLightning: Boolean
        location: Location
        presentationDate: Date
        startDate: Date
        title: String!
        url: String
        video: String
      }

      type Talk implements Node {
        description: String
        title: String!
      }

      type Workshop implements Node {
        description: String
        title: String!
      }
    `,
    // schema.buildObjectType({
    //   name: 'Query',
    //   fields: {
    //     allTalk: {
    //       type: ['Talk'],
    //       resolve: (source, args, context) => {
    //         console.log('here');
    //         const talks = context.nodeModel
    //           .getAllNodes({ type: 'Mdx' })
    //           .filter(mdx =>
    //             mdx.fileAbsolutePath.includes('/content/events/talks'),
    //           )
    //           .map(mdx => ({
    //             ...mdx.frontmatter,
    //             children: mdx.children,
    //             description: mdx.body,
    //             id: mdx.id,
    //             internal: mdx.internal,
    //             parent: mdx.parent,
    //           }));

    //         console.log(talks);

    //         return talks;
    //       },
    //     },
    //     allTalks: {
    //       type: ['Talk'],
    //       resolve: (source, args, context) => {
    //         console.log('here');
    //         const talks = context.nodeModel
    //           .getAllNodes({ type: 'Mdx' })
    //           .filter(mdx =>
    //             mdx.fileAbsolutePath.includes('/content/events/talks'),
    //           )
    //           .map(mdx => ({
    //             ...mdx.frontmatter,
    //             children: mdx.children,
    //             description: mdx.body,
    //             id: mdx.id,
    //             internal: mdx.internal,
    //             parent: mdx.parent,
    //           }));

    //         console.log(talks);

    //         return talks;
    //       },
    //     },
    //   },
    // }),
    // schema.buildObjectType({
    //   name: 'MdxFrontmatter',
    //   fields: {
    //     events: {
    //       type: '[Node!]!',
    //       resolve: (source, args, context) =>
    //         context.nodeModel
    //           .getAllNodes({ type: 'Mdx' })
    //           .filter(
    //             mdx =>
    //               mdx.fileAbsolutePath.includes('/content/events/talks') &&
    //               mdx.frontmatter.talk === source.id,
    //           )
    //           .map(mdx => mdx.frontmatter),
    //     },
    //     talk: {
    //       type: 'Talk',
    //       resolve: (source, args, context) => {
    //         const mdx = context.nodeModel
    //           .getAllNodes({ type: 'Mdx' })
    //           .find(mdx =>
    //             mdx.fileAbsolutePath.includes('/content/events/talks'),
    //           );

    //         return (
    //           {
    //             ...mdx.frontmatter,
    //             children: mdx.children,
    //             description: mdx.body,
    //             id: mdx.id,
    //             internal: mdx.internal,
    //             parent: mdx.parent,
    //           } || null
    //         );
    //       },
    //     },
    //     workshop: {
    //       type: 'Workshop',
    //       resolve: (source, args, context) => {
    //         const mdx = context.nodeModel
    //           .getAllNodes({ type: 'Mdx' })
    //           .find(mdx =>
    //             mdx.fileAbsolutePath.includes('/content/events/workshops'),
    //           );

    //         return (
    //           {
    //             ...mdx.frontmatter,
    //             children: mdx.children,
    //             description: mdx.body,
    //             id: mdx.id,
    //             internal: mdx.internal,
    //             parent: mdx.parent,
    //           } || null
    //         );
    //       },
    //     },
    //   },
    // }),
  ];
  actions.createTypes(typeDefs);
};

exports.createResolvers = ({ actions, createResolvers, getNodes }) => {
  console.log(actions);
  //   const resolvers = {
  //     Query: {
  //       allTalks: {
  //         type: ['Talk'],
  //         resolve: () => {
  //           console.log('override');
  //           return [{ id: '1' }];
  //         },
  //       },
  //     },
  //   };

  //   actions.createResolvers(resolvers);
};

exports.onCreateNode = ({ actions, getNode, node }) => {
  if (node.internal.type === 'Mdx') {
    // On all blog posts, create a slug field with the given file path as a value
    if (node.fileAbsolutePath.includes(`${__dirname}/content/posts`)) {
      const filePath = createFilePath({ node, getNode });
      const slug = node.fileAbsolutePath.includes(`${__dirname}/content/posts`)
        ? `/blog${filePath}`
        : filePath;

      actions.createNodeField({
        name: 'slug',
        node,
        value: slug,
      });
    }
  }
};

exports.sourceNodes = ({ actions }) => {
  // console.log(actions);
  // actions.createNode({
  //   allTalks,
  // });
};
