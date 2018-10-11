import React from 'react'

import Layout from '../components/layout'
import Section from '../components/sections/section'
import SubOne from '../utils/subone'

const NowPage = ({data}) => (
  <Layout>

    {data.allContentfulNow.edges.map(edge => (
      <Section
      title={edge.node.date}
      key={edge.node.id} >
        <SubOne>
          <h4>What I am doing at work:</h4>
          <p>{edge.node.whatIAmDoingAtWork.whatIAmDoingAtWork}</p>

          <h4>Personal projects I am making progress on:</h4>
          <p>{edge.node.personalProjectsIAmWorkingOn.personalProjectsIAmWorkingOn}</p>

          <h4>Life updates I fell like sharing:</h4>
          <p>{edge.node.lifeThingsIWantToShare.lifeThingsIWantToShare}</p>
        </SubOne>

        

      </Section>
    ))}
    
  </Layout>
)


export const query = graphql`
  query {
    allContentfulNow (
      sort: {
        fields: [date],
         order: DESC}, )
    {
      edges {
        node {
          id
          date
         whatIAmDoingAtWork {
           whatIAmDoingAtWork
         }
         personalProjectsIAmWorkingOn {
           personalProjectsIAmWorkingOn
         }
         lifeThingsIWantToShare {
           lifeThingsIWantToShare
         }
        }
      }
    }
 }
`

export default NowPage
