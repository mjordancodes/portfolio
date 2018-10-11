import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Section from './section'
import SubOne from '../../utils/subone'
import Contact from '../contact-item'

export default () => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        allContentfulOnlineIdentity {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `}
    render={data => (
      <Section title="Contact">
    <SubOne 
        ifFlex={false}>
        <p>Reach out! I love to talk about anything CSS, HTML, design, or web development in general. I'm always willing to help out a new coder or share my experience. Come find me online and send a message. I can be found in many places around the interwebs usually as @mjordancodes. </p>
      </SubOne>
      <SubOne
        isFlex={true}>
        { data.allContentfulOnlineIdentity.edges.map(edge => (
            <Contact 
              key={edge.node.id}
              title={edge.node.title}
              url={edge.node.url}
            />
          )
        )}
        <Contact 
          title='hi at mjordan dot codes'
          url='mailto:hi@mjordan.codes'
        />
      </SubOne>
  </Section>
    )}
  />
)

