# Portfolio
Gatsby + Contentful = <3

# Project Steps
1. Looked at lots and lots of portfolios and websites for design inspiration.
2. Built an HTML/CSS prototype on codepen of the home page: [Portfolio Prototype](https://codepen.io/mjordancodes/full/db5f3fe6fb1039ab4f33dbf0e5c3151e/)
3. Grabbed the ["Hello World" gatsby starter](https://github.com/gatsbyjs/gatsby-starter-hello-world)
4. Created a ```components``` folder and started creating files for major components. 
    - ```landing.js``` for the top splash page
    - ```section.js``` for the different main sections on the home page.
5. Installed and set up some styling plugins.
6. Started breaking up the parts of ```section.js``` into smaller components and creating those as needed. (```subone.js```, ```subtwo.js```, ```community.js```)


# Plugins Used (Gastby)
## Styling
- [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/)
- [gatsby-plugin-typography](https://www.gatsbyjs.org/docs/typography-js/)
- [typography-theme-doelger](https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-doelger)
- [react-icon](https://www.npmjs.com/package/react-icons)
## Functionality
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)

## Project Structure
- ```src```
  - ```components```
    - ```layout.js``` - Holds the over all page structure for all pages of the site. Kind of like the index.html in normal world.
      - ```layout.scss``` - Global styles
    - ```landing.js```- Acts as a landing/splash/above-the-fold component.
      - Pages using this component:
        - home (index.js)
    - ```section.js```- Home page has several sections that act as previews for major pages of the site.
      - ```subone.js``` - The sections have sub-areas. This one applies a layout for a sub-area (row) that has only one column
      - ```subtwo.js``` - The sections have sub-areas. This one applies a layout for a sub-area (row) that has two columns
        - ```community.js``` - This goes into a sub-area to provide multiple items of content using flexbox with specific styling for displaying community groups I am involved with

