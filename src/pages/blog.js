import React from 'react'
import { graphql } from "gatsby"

import Styles from './blog.module.scss'

import Layout from '../components/layout'
import Header from '../components/sections/header'
import Section from '../components/sections/section'

const BlogPage = ({data}) => (
  <Layout>
    <Header />
    <Section title="Blog">
      <div className={Styles.container}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <div className={Styles.postPreview}>
            <header>
              <h3>
                <a href={`/blog/${edge.node.slug}`}>
                  {edge.node.title}
                </a>
              </h3>
              <p>
                {edge.node.createdAt} | {edge.node.postType}
              </p>
              {edge.node.tags ? (
                <span>{edge.node.tags.map(tag => (
                  <span key={tag}>{tag} </span>
                ))}</span>
                ) : <span></span>
              }
            </header>
            <div
              dangerouslySetInnerHTML={{
                __html: edge.node.teaser.childMarkdownRemark.html,
              }}
            />
          </div>
        ))}
      </div>
    </Section>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          postType
          tags
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          teaser {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default BlogPage
