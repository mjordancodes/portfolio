require('dotenv').config()

module.exports = {
    siteMetadata: {
      title: 'mJordan Codes',
      name: 'mJordan',
      tagline: 'I design, develop & teach the web.'
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-sass`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        }
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID || '',
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
        },
      },
    ],
  }