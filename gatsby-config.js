module.exports = {
  siteMetadata: {
    name: `Gerald Nash`,
    title: `Gatsby Deck`,
    date: `⚡️`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
