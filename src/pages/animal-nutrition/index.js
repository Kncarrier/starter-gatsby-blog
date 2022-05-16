import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Link } from 'gatsby'

import {
  Box,
  Typography,
  Grid,
  Stack,
  Icon
} from '@mui/material'

import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import ArticlePreview from '../../components/article-preview'

const species = [
  {
    name: 'dairy',
    label: 'Dairy Cow',
    icon: 'dairy',
    path: 'animal-nutrition/dairy-cow'
  },
  {
    name: 'beef',
    label: 'Beef Cattle',
    icon: 'beef',
    path: 'animal-nutrition/beef-cattle-health-and-nutrition'
  },
  {
    name: 'poultry',
    label: 'Poultry',
    icon: 'chicken',
    path: 'animal-nutrition/poultry'
  },
  {
    name: 'pig',
    label: 'Pig',
    icon: 'pig',
    path: 'animal-nutrition/pig'
  },
  {
    name: 'aqua',
    label: 'Aquaculture',
    icon: 'fish',
    path: 'animal-nutrition/aquaculture'
  },
  {
    name: 'equine',
    label: 'equine',
    icon: 'horse',
    path: 'animal-nutrition/equine-health-and-nutrition'
  },
  {
    name: 'pet',
    label: 'Pet',
    icon: 'dog',
    path: 'animal-nutrition/pet'
  },
  {
    name: 'crop-science',
    label: 'Crop Science',
    icon: 'grain',
    path: 'crop-science'
  }
]

class AnimalNutritionIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allNodeArticle.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Animal Nutrition" />
        <Stack>
          <Box sx={{ width: '100%', bgcolor: '#c1531b', color: 'white', p: 3 }}>
            <Typography variant="h2">Animal Nutrition & Health</Typography>
          </Box>
          <Box sx={{ width: '100%', p: 5 }}>
            <Stack direction="row" spacing={4} justifyContent="center" sx={{ width: '100%', mt: 5 }}>
              {species.map((spec, i) => (
                <Link key={`icon-link-${spec.name}`} to={`/${spec.path}`}>
                  <Stack alignItems="center" spacing={2}>
                    <Icon baseClassName="fak" className={`fa-${spec.icon}`} sx={{ fontSize: '6rem' }} />
                    <Typography variant="h5">{spec.label}</Typography>
                  </Stack>
                </Link>
              ))}
            </Stack>
          </Box>
          <Box sx={{ width: '100%', p: 5, bgcolor: '#E5E7E8' }}>
            <ArticlePreview posts={posts} />
          </Box>
        </Stack>
      </Layout>
    )
  }
}

export default AnimalNutritionIndex

export const pageQuery = graphql`
  query AnimalNutritionBlogsQuery {
    allNodeArticle(
      filter: {langcode: {eq: "en"}, relationships: {field_article_type: {elemMatch: {name: {eq: "Blog"}}}}}
      sort: {fields: created, order: DESC}
      limit: 3
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
