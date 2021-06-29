module.exports = {
  siteMetadata: {
    title: `Cultura Salon`,
    mission: `Our mission at Cultura Salon is creating confidence with simplicity
    and authenticity.`,
    description: `Balayage • Makeup • Haircuts • Handtied Extensions Oligo Pro • Redken • Olaplex`,
    address: `2570 Blackmon Dr,Suite 440,
    Decatur, GA 30033`,
    igHandle: "cultura.salon.atl",
    igAccessToken: "d6bcb99e8655b82b5817ddd4fe1d78e8",
    imagesToPull: 12,
    author: `@asantoss`,
    siteUrl: `https://culturasalon.com`,
    bookingSite: `https://culturasalon.glossgenius.com/services`,
    saleSite: "https://culturasalon.glossgenius.com/gift-cards",
    schedule: {
      monday: {
        available: false,
        from: "",
        to: "",
      },
      tuesday: {
        available: false,
        from: "10:00 AM",
        to: "8:00 PM",
      },
      wednesday: {
        available: true,
        from: "10:00 AM",
        to: "8:00 PM",
      },
      thursday: {
        available: true,
        from: "10:00 AM",
        to: "8:00 PM",
      },
      friday: {
        available: true,
        from: "10:00 AM",
        to: "5:00 PM",
      },
      saturday: {
        available: true,
        from: "9:00 AM",
        to: "2:00 PM",
      },
      sunday: {
        available: false,
        from: "",
        to: "",
      },
    },
    cancelPolicy: `If you need to cancel your appointment, it is required to give 48 hours notice prior to your appoinment. If you cancel outside of the 48 hour window, 50% of the service will be charged to the card on file.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          "IGQVJWWlBoWFVIckN3RWJOZAkg1bzhnUWI3WHpvZAzNaX3lOSV9Sd1Nwdl82bVY2REV4alU1S19SbmtqUS1pMU1vNHB1OTVzX2hVb1VlMm9rcFZA2VGE3REM5QXdvLXAyb1p6Wi0zNERjUWlVSTRzWDVjYgZDZD",
      },
    },
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-instagram-embed",
            options: {
              width: 500,
              height: 500,
            },
          },
          `gatsby-remark-responsive-iframe`, // optional plugin but recommended
        ],
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
