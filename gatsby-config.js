module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Rick and Morty",
  },
  plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-postcss",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve: "gatsby-source-graphql",
          options: {
              typeName: "RAM",
              fieldName: "ram",
              url: "https://rickandmortyapi.com/graphql"
          }
      }
  ],
};
