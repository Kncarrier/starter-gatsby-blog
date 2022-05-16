import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import readingTime from 'reading-time'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.nodeArticle')

    console.log(post)

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
        />
        <div className={styles.container}>
          <div className={styles.article}>
            <h1>{post.title}</h1>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.body.processed }}>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
  ) {
    nodeArticle(id: {eq: $id}) {
      body {
        processed
        value
      }
      title
    }
  }
`
