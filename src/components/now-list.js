import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Section from '../components/sections/section'
import SubOne from '../utils/subone'

export default () => (
  <StaticQuery
    query={graphql`
      query NowListQuery {
        allContentfulNow (
          sort: {
            fields: [date],
             order: DESC}, )
        {
          edges {
            node {
              id
              date
            }
          }
        }
      }
    `}
    render={data => (
      <Section 
        title="Older">
      <SubOne>
        <ul>
          {data.allContentfulNow.edges.map(edge => (
            <li key={edge.node.key}>
              {edge.node.date}
            </li>
          ))}
        </ul>
      </SubOne>  
      </Section>
    )}
  />
)

