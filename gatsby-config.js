require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  siteMetadata: {
    title: 'Glenn Reyes',
    description:
      'I help people create beautiful products through web technologies.',
    author: '@glnnrys',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
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
    'gatsby-plugin-typescript-checker',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
  ],
};
