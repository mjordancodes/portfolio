import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Section from '../components/sections/section'
import SubOne from '../utils/subone'

import Styles from './now.module.scss'


export default () => (
  <StaticQuery
    query={graphql`
      query NowCurrentQuery {
        allContentfulNow (
          limit: 1
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
    `}
    render={data => (
      <Section
        title="Now">
        <SubOne
          title={`Updated: ${data.allContentfulNow.edges[0].node.date}`} >

          <h4 className={Styles.title}>What I am doing at work:</h4>
          <p>{data.allContentfulNow.edges[0].node.whatIAmDoingAtWork.whatIAmDoingAtWork}</p>

          <h4 className={Styles.title}>Personal projects I am making progress on:</h4>
          <p>{data.allContentfulNow.edges[0].node.personalProjectsIAmWorkingOn.personalProjectsIAmWorkingOn}</p>

          <h4 className={Styles.title}>Life updates I fell like sharing:</h4>
          <p>{data.allContentfulNow.edges[0].node.lifeThingsIWantToShare.lifeThingsIWantToShare}</p>
        </SubOne>

      </Section>
    )}
  />
)

