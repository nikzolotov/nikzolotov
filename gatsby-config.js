module.exports = {
  siteMetadata: {
    title: `Nikita Zolotov`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
