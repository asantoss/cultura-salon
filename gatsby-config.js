module.exports = {
  siteMetadata: {
    title: `Cultura Salon`,
    mission: `Our mission at Cultura Salon is creating confidence with simplicity
    and authenticity.`,
    description: `Balayage • Makeup • Haircuts • Handtied Extensions Oligo Pro • Redken • Olaplex`,
    address: `2570 Blackmon Dr,Suite 440,
    Decatur, GA 30033`,
    igHandle: "cultura.salon.atl",
    author: `@asantoss`,
    siteUrl: `https://culturasalon.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-material-ui`,
    "gatsby-plugin-instagram-embed",
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `cultura.salon.atl`,
        instagram_id: "274302406892373",
        paginate: 50,
        maxPosts: 100,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-cultura-salon`,
        short_name: `salon`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/adalys_logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
