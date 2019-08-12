require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const IS_DEV = process.env.NODE_ENV === 'development';
const siteUrl = 'https://glennreyes.com';

module.exports = {
  siteMetadata: {
    author: 'Glenn Reyes',
    description:
      'I help people create beautiful products through web technologies.',
    siteUrl,
    title: 'Glenn Reyes',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: { siteUrl },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.tsx?$/,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        anonymize: true,
        respectDNT: true,
        trackingId: 'UA-72115430-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Glenn Reyes',
        short_name: 'Glenn R.',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/default.tsx'),
        },
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 640 },
          },
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: IS_DEV,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false,
          },
        },
        svgProps: { fill: 'currentColor' },
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'appearances',
        path: `${__dirname}/content/events`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'talks',
        path: `${__dirname}/content/talks`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'workshops',
        path: `${__dirname}/content/workshops`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-images'],
      },
    },
    'gatsby-transformer-sharp',
  ],
};
