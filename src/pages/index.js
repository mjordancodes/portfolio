import React from 'react'

import Layout from '../components/layout'
import Community from '../components/community'

import ContactSection from '../sections/contact'
import AboutSection from '../sections/about'

const IndexPage = () => (
  <Layout>
    <AboutSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
