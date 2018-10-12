import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import SubOne from '../../utils/subone'
import Community from '../community-item'



export default () => (
  <StaticQuery
    query={graphql`
      query CommunityQuery {
        contentfulAboutTopic(
          tItle:{
            eq:"Community Involvement"
          }
        ) {
          description {
            childMarkdownRemark {
              html
            }
          }
          about_sub_topic {
            id
            title
            description {
              childMarkdownRemark {
                html
              }
            }
            logo {
              file {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <SubOne 
        title="Community Involvement"
        isFlex={false}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulAboutTopic.description.childMarkdownRemark.html,
          }}
        />
      </SubOne>
      <SubOne
        isFlex={true}>
        {data.contentfulAboutTopic.about_sub_topic.map(edge => (
          <Community
            title={edge.title}
            image={edge.logo.file.url}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: edge.description.childMarkdownRemark.html,
              }}
            />
          </Community>
        ))}
       
        
      </SubOne>
      </>
    )}
  />
)
