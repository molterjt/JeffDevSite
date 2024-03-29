module.exports = {
  siteMetadata: {
    title: `Jeff Molter`,
    description: `Developer portfolio`,
    author: `Jeff Molter`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: "Jeff Molter",
            short_name: "Jeff_Molter",
            start_url: "/",
            background_color: "#0d8a76",
            theme_color: "#0d8a76",
            // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
            // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
            display: "standalone",
            icon: "src/images/icon.png", // This path is relative to the root of the site.
        },
    },
      // {
      //     resolve: `gatsby-plugin-prefetch-google-fonts`,
      //     options: {
      //         fonts: [
      //             {
      //                 family: `Quantico`,
      //             },
      //         ],
      //     },
      // }
  ],
}
