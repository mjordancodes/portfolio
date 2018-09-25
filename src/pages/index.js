import React from 'react'

import Layout from '../components/layout'
import Section from '../components/section'
import SubOne from '../components/subone'
import SubTwo from '../components/subtwo'
import Community from '../components/community'

const IndexPage = () => (
  <Layout>
    <Section title="About">
      <SubTwo>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/325029/michelle.png"/>
        <div>
          <h3>Hello World</h3>
          <p>I’m mJordan, a creative front end developer currently working as a contractor at Nike. Nothing excites me more than immersing myself in a good challenge or a great book. For me, coding is the perfect mix of logical problem solving, and creative artistic expression. When not coding, I am spending my time creating something new, getting involved in the local tech community, or exploring the world around me with my trusty Nikon camera.</p>
        </div>
      </SubTwo>
      <SubOne 
        title="Community Involvement"
        isFlex={false}>
        <p>I started attending meetups and meeting my coding community in Portland during the summer of 2015. I now volunteer with and organize meetups for PDXNode and Women Who Code Portland. I have spent time volunteering at other various meetups and always make sure to help out a new developer where I can.</p>
      </SubOne>
      <SubOne
        isFlex={true}>
        <Community 
          title="PDXNode"
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/325029/logo.svg" >
          <p>I joined the organizing team for this meetup in the first half of 2017. I help with organizing our two regular monthly events: a presentation night and a hack night. I also help out with community engagement via twitter, and have been reaching out to gather sponsors.</p>
        </Community>
        <Community 
          title="Women Who Code"
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/325029/WWCode_Portland_Binary.png" >
          <p>I was brought on to the leadership team towards the end of 2016 officially. I spent the first several months helping at Networking Nights, and filling in as needed for other events. In 2018 I am stepping into a more regular role as the co-lead for the Open Source Study Nights that are held once a month. I will also be creating a set of four CSS based workshops that I will lead this year.</p>
        </Community>
      </SubOne>
    </Section>
    <Section title="Projects" />
    <Section title="Blog" />
    <Section title="Contact" />
  </Layout>
)

export default IndexPage
