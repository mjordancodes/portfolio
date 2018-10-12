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
                childMarkdownRemark {
                  html
                }
              }
              personalProjectsIAmWorkingOn {
                childMarkdownRemark {
                  html
                }
              }
              lifeThingsIWantToShare {
                childMarkdownRemark {
                  html
                }
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
          <div
            className={Styles.updates}
            dangerouslySetInnerHTML={{
              __html: data.allContentfulNow.edges[0].node.whatIAmDoingAtWork.childMarkdownRemark.html,
            }}
          />

          <h4 className={Styles.title}>Personal projects I am making progress on:</h4>
          <div
            className={Styles.updates}
            dangerouslySetInnerHTML={{
              __html: data.allContentfulNow.edges[0].node.personalProjectsIAmWorkingOn.childMarkdownRemark.html,
            }}
          />

          <h4 className={Styles.title}>Life updates I fell like sharing:</h4>
          <div
            className={Styles.updates}
            dangerouslySetInnerHTML={{
              __html: data.allContentfulNow.edges[0].node.lifeThingsIWantToShare.childMarkdownRemark.html,
            }}
          />
        </SubOne>

      </Section>
    )}
  />
)

