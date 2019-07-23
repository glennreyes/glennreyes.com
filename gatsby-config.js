require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  siteMetadata: {
    author: 'Glenn Reyes',
    description:
      'I help people create beautiful products through web technologies.',
    title: 'Glenn Reyes',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.tsx?$/,
      },
    },
    'gatsby-plugin-react-helmet',
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
      resolve: `gatsby-plugin-mdx`,
      options: {
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
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: IS_DEV,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        replaceAttrValues: {
          '#000': 'currentColor',
          '#fff': 'currentColor',
        },
        svgProps: { fill: 'currentColor' },
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    'gatsby-transformer-sharp',
  ],
};
