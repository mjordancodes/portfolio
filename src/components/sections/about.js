import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Section from './section'
import SubTwo from '../../utils/subtwo'
import CommunitySection from './community'



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
            childMarkdownRemark {
              html
            }
          }
          blurb {
            childMarkdownRemark {
              html
            }
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
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulBio.blurb.childMarkdownRemark.html,
            }}
          />
        </div>
      </SubTwo>
      <CommunitySection />
    </Section>
    )}
  />
)

