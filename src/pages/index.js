import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Landing from '../components/landing'

import ContactSection from '../sections/contact'
import AboutSection from '../sections/about'

const IndexPage = ({data}) => (
  <Layout>
    <Landing 
          name={data.site.siteMetadata.name}
          tagline={data.site.siteMetadata.tagline} />
    <AboutSection />
    <ContactSection />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        name
        tagline
      }
    }
  }
`

export default IndexPage
