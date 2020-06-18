module.exports = {
  siteMetadata: {
    title: `Cultura Salon`,
    mission: `Our mission at Cultura Salon is creating confidence with simplicity
    and authenticity.`,
    description: `Balayage • Makeup • Haircuts • Handtied Extensions Oligo Pro • Redken • Olaplex`,
    address: `2570 Blackmon Dr,Suite 440,
    Decatur, GA 30033`,
    igHandle: "cultura.salon.atl",
    imagesToPull: 12,
    author: `@asantoss`,
    siteUrl: `https://culturasalon.com`,
    bookingSite: `https://squareup.com/appointments/buyer/widget/fi2fsgd0yw00y2/VB5J8A254VE01`,
    saleSite: "https://squareup.com/gift/H45BMVZP56ZBA/order",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
        props: { className: "logo", title: "Logo" },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-145109659-1",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-material-ui`,
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
