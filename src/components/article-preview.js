import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`} className={styles.link}>
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div>
                {post.body.summary && post.body.summary}
              </div>
              <div className={styles.meta}>
                <small className="meta">{post.field_date}</small>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
