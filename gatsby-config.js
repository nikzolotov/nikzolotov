module.exports = {
  siteMetadata: {
    title: `Nikita Zolotov`,
    titleTemplate: `%s · Nikita Zolotov`,
    description: `Product designer and developer based in Moscow`,
    url: `https://nikzolotov.ru`,
    image: `/favicon.ico`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-168670137-1",
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 46831923,
        webvisor: false,
        trackHash: true,
        afterBody: false,
        defer: false,
      },
    },
  ],
};
