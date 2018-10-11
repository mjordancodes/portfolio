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
            description
          }
          about_sub_topic {
            id
            title
            description {
              description
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
        {data.contentfulAboutTopic.description.description}
      </SubOne>
      <SubOne
        isFlex={true}>
        {data.contentfulAboutTopic.about_sub_topic.map(edge => (
          <Community
            title={edge.title}
            image={edge.logo.file.url}
            children={edge.description.description}
          />
        ))}
       
        
      </SubOne>
      </>
    )}
  />
)

