import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Styles from './blog-post.module.scss'

import Header from '../components/sections/header'

class BlogPost extends Component {
  render() {
    console.log(this.props)
    const { title, createdAt, postType, tags, post } = this.props.data.contentfulBlogPost
    return (
      <div>
        <Header />
        <article className={Styles.container}>
          <header className={Styles.postInfo}>
            <h1>{title}</h1>
            <p>
              {createdAt} | 
              <span className={Styles.postType}>
                {postType} 
              </span>
              {tags ? (
              <span> | {tags.map(tag => (
                <span className={Styles.tags} key={tag}>{tag} </span>
              ))}</span>
              ) : <span></span>}
            </p>
          </header>
          <div
            dangerouslySetInnerHTML={{
              __html: post.childMarkdownRemark.html,
            }}
          />
        </article>
      </div>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      postType
      tags
      slug
      createdAt(formatString: "MMMM DD, YYYY")
      post {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`