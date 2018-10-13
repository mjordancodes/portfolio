import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Landing from '../components/home/landing'
import Header from '../components/sections/header'
import ContactSection from '../components/sections/contact'
import AboutSection from '../components/sections/about'

const IndexPage = ({data}) => (
  <Layout>
    <Landing 
          name={data.site.siteMetadata.name}
          tagline={data.site.siteMetadata.tagline} />
    {/* <Header /> */}
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
