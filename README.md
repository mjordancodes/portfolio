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
    - `layout.js` - Holds the over all page structure for all pages of the site. Kind of like the index.html in normal world.
      - `layout.scss` - Global styles
    - `landing.js`- Acts as a landing/splash/above-the-fold component.
      - Pages using this component:
        - home (index.js)
    - `section.js`- Home page has several sections that act as previews for major pages of the site.
      - Sub-Area
        - `subone.js` - The sections have sub-areas. This one applies a layout for a sub-area (row) that has only one column
        - `subtwo.js` - The sections have sub-areas. This one applies a layout for a sub-area (row) that has two columns
        - Specific Content
          - `community.js` - This goes into a sub-area to provide multiple items of content using flexbox with specific styling for displaying community groups I am involved with
          - `contact.js` - this goes into a sub-area to provide multiple items of content using flexbox with specific styling for displaying websites you can use to contact me.
  - `section` - Mamy of there were pulled out into sections to have more control over creating very specific graphQL queries.
    - `about.js` - Builds the about section for the home page. 
    - `community.js` - Builds the community involvement section of the about section of the home page
    - `contact.js` - builds a contact section
  - `pages`
    - `index.js` - Home page

