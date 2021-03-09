import dotenv from 'dotenv';

// dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Digital Spaniel`,
    siteUrl: `https://google.com`,
    description: `5874commerce Digital Spaniel technical inteview stage test`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'jxhgrn3d',
        dataset: 'production',
        watchMode: true, // Hot loading whilst in development
        token: process.env.SANITY_TOKEN,
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
  ],
};
