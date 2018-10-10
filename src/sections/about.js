import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Section from '../components/section'
import SubOne from '../components/subone'
import SubTwo from '../components/subtwo'
import Community from '../components/community'



export default () => (
  <StaticQuery
    query={graphql`
      query AboutBioQuery {
        contentfulBio(
          bioType:{
            eq: "Main"
          }
        ) {
          fullLength {
            fullLength
          }
          blurb {
            blurb
          }
        }
      }
    `}
    render={data => (
<Section title="About">
      <SubTwo>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/325029/michelle.png" alt="Jordan" />
        <div>
          <h3>Hello World</h3>
          {data.contentfulBio.blurb.blurb}
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
    )}
  />
)

