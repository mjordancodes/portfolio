
module.exports = {
    siteMetadata: {
      title: 'mJordan Codes',
      name: 'mJordan',
      tagline: 'I design, develop & teach the web.'
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        }
      },
    ],
  }