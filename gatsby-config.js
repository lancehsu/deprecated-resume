/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: '/resume',
  siteMetadata: {
    title: `Resume`,
    description: `Lance's resume`,
    author: `@lancehsu`,
  },
  plugins: [
    'gatsby-plugin-material-ui',
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/content/L.png',
      },
    },
  ],
};
