import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Tutorial`,
    siteUrl: `https://www.yourdomain.tld`,
    socials: {
      twitter: `https://twitter.com/getsentry/`,
      github: `https://github.com/getsentry/`,
      dribble: 'https://dribbble.com/sentry/',
      linkedin: `https://linkedin.com/company/getsentry/`,
    }
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `for`,
        path: `${__dirname}/for`,
        ignore: [`${__dirname}/blog`]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `resources`,
        path: `${__dirname}/resources`,
        ignore: [`${__dirname}/blog`, `${__dirname}/for`]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    }
  ]
};

export default config;
