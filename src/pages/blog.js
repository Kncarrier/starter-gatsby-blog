import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allNodeArticle.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
    allNodeArticle(
      filter: {langcode: {eq: "en"}, relationships: {field_article_type: {elemMatch: {name: {eq: "Blog"}}}}}
      sort: {fields: created, order: DESC}
    ) {
      nodes {
        title
        relationships {
          field_article_type {
            name
          }
        }
        revision_timestamp
        body {
          summary
        }
        id
      }
    }
  }
`
