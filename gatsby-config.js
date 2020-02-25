const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Curso Scorm Gatsby`,
    description: `Controle do curso de Scomr Gatsby`,
    author: `@nilocesar`,
    siteUrl: `https://nilo250385.000webhostapp.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    
  ],
}

const siteMetadata = module.exports.siteMetadata;

module.exports.plugins.push(
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      short_name: `PWA Nilo`,
      start_url: `/`,
      background_color: `#070707`,
      theme_color: `#070707`,
      display: `standalone`,
      icon: `content/assets/icon.png`,
      legacy: true,
    },
  });