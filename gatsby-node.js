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

exports.createSchemaCustomization = async ({
  actions: { createTypes },
  schema,
  ...options
}) => {
  const typeDefs = `
    type Location {
      address: String
      latitude: Float
      longitude: Float
      name: String
      city: String!
      country: String!
    }

    type TalkEvent implements Node {
      date: Date
      endDate: Date
      isLightning: Boolean
      location: Location
      startDate: Date
      title: String!
      url: String
      video: String
    }

    type WorkshopEvent implements Node {
      date: Date
      endDate: Date
      location: Location
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
  `;

  await createTypes(typeDefs);
};

exports.createResolvers = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
  createResolvers,
  getNodesByType,
}) => {
  const allMdx = await getNodesByType('Mdx');

  const createEventNodes = type => {
    const allMdxEvent = allMdx.filter(mdx =>
      mdx.fileAbsolutePath.includes('/content/events'),
    );

    return allMdxEvent.map(
      ({
        fileAbsolutePath,
        frontmatter,
        id,
        internal: { owner, ...internal },
        rawBody,
      }) =>
        createNode({
          children: [],
          date: frontmatter.date,
          endDate: frontmatter.endDate,
          fileAbsolutePath,
          id: createNodeId(id),
          internal: {
            ...internal,
            content: rawBody,
            contentDigest: createContentDigest(rawBody),
            type: `${type}Event`,
          },
          isLightning: frontmatter.isLightning,
          location: frontmatter.location,
          address: frontmatter.address,
          city: frontmatter.city,
          country: frontmatter.country,
          name: frontmatter.name,
          parent: null,
          slidesUrl: frontmatter.slidesUrl,
          startDate: frontmatter.startDate,
          talk: frontmatter.talk,
          title: frontmatter.title,
          url: frontmatter.url,
          videoUrl: frontmatter.videoUrl,
          workshop: frontmatter.workshop,
        }),
    );
  };

  const createTalkNodes = () => {
    const allMdxTalk = allMdx.filter(mdx =>
      mdx.fileAbsolutePath.includes('/content/talks'),
    );

    return allMdxTalk.map(
      ({
        fileAbsolutePath,
        frontmatter,
        id,
        internal: { owner, ...internal },
        rawBody,
      }) =>
        createNode({
          children: [],
          description: rawBody || frontmatter.description,
          id: createNodeId(id),
          fileAbsolutePath,
          internal: {
            ...internal,
            content: rawBody,
            contentDigest: createContentDigest(rawBody),
            type: 'Talk',
          },
          parent: null,
          title: frontmatter.title,
        }),
    );
  };

  const createWorkshopNodes = () => {
    const allMdxWorkshop = allMdx.filter(mdx =>
      mdx.fileAbsolutePath.includes('/content/workshops'),
    );

    return allMdxWorkshop.map(
      ({
        fileAbsolutePath,
        frontmatter,
        id,
        internal: { owner, ...internal },
        rawBody,
      }) =>
        createNode({
          children: [],
          description: rawBody || frontmatter.description,
          fileAbsolutePath,
          id: createNodeId(id),
          internal: {
            ...internal,
            content: rawBody,
            contentDigest: createContentDigest(rawBody),
            id,
            type: 'Workshop',
          },
          parent: null,
          title: frontmatter.title,
        }),
    );
  };

  await Promise.all([
    ...createEventNodes('Talk'),
    ...createEventNodes('Workshop'),
    ...createTalkNodes(),
    ...createWorkshopNodes(),
  ]);

  const resolvers = {
    Talk: {
      events: {
        type: '[TalkEvent!]!',
        resolve: (source, args, context) =>
          context.nodeModel
            .getAllNodes({ type: 'TalkEvent' })
            .filter(event =>
              source.fileAbsolutePath.endsWith(`/${event.talk}.md`),
            ),
      },
    },
    TalkEvent: {
      talk: {
        type: 'Talk',
        resolve: (source, args, context) =>
          context.nodeModel
            .getAllNodes({ type: 'Talk' })
            .find(talk => talk.fileAbsolutePath.endsWith(`/${source.talk}.md`)),
      },
    },
    Workshop: {
      events: {
        type: '[WorkshopEvent!]!',
        resolve: (source, args, context) =>
          context.nodeModel
            .getAllNodes({ type: 'WorkshopEvent' })
            .filter(event =>
              source.fileAbsolutePath.endsWith(`/${event.workshop}.md`),
            ),
      },
    },
    WorkshopEvent: {
      workshop: {
        type: 'Workshop',
        resolve: (source, args, context) =>
          context.nodeModel
            .getAllNodes({ type: 'Workshop' })
            .find(workshop =>
              workshop.fileAbsolutePath.endsWith(`/${source.workshop}.md`),
            ),
      },
    },
  };
  createResolvers(resolvers);
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
