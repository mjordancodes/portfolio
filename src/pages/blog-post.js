import React from "react"
import { graphql } from "gatsby"
import Styles from './blog-post.module.scss'

import Layout from "../components/layout"
import Header from '../components/sections/header'


const BlogPost = ({data}) => (
  <Layout>
    <Header />
    <article className={Styles.container}>
      <header className={Styles.postInfo}>
        <h1>{data.allContentfulBlogPost.edges[1].node.title}</h1>
        <p>
          {data.allContentfulBlogPost.edges[1].node.createdAt} | 
          <span className={Styles.postType}>
            {data.allContentfulBlogPost.edges[1].node.postType} 
          </span>
          {data.allContentfulBlogPost.edges[1].node.tags ? (
          <span> | {data.allContentfulBlogPost.edges[1].node.tags.map(tag => (
            <span className={Styles.tags} key={tag}>{tag} </span>
          ))}</span>
          ) : <span></span>}
        </p>
      </header>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allContentfulBlogPost.edges[1].node.post.childMarkdownRemark.html,
        }}
      />
    </article>
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
          createdAt(formatString: "MMMM DD, YYYY")
          post {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default BlogPost
