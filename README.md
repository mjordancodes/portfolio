# Portfolio
Gatsby + Contentful = <3

# Plugins Used (Gatsby)
## Styling
- [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/)
- [gatsby-plugin-typography](https://www.gatsbyjs.org/docs/typography-js/)
- [typography-theme-doelger](https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-doelger)
- [react-icon](https://www.npmjs.com/package/react-icons)
## Functionality
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)
## Content 
- [gatsby-source-contentful](https://www.gatsbyjs.org/packages/gatsby-source-contentful/)

## Project Structure
- `src`
  - `components`
    - `sections`: These are more like component containers. They probably hold multiple copies of other component items.
    - `home`: This folder holds special components that are only used by the home page.
    - `*-item.js`: These are components that are meant to be repeated, never used as stand-alone sections.
    - `layout.js` - Holds the over all page structure for all pages of the site. Kind of like the index.html in normal world.
      - `layout.scss` - Global styles
  - `pages`: Different pages of the site.
  - `utils`: Helper bits. 


