import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"

import Writings from '../../components/Writings'

const WritingsPage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: writings },
  } = data

  return (
    <Wrapper>
      <Writings writings={writings} />
    </Wrapper>
  )
}

export default WritingsPage

const Wrapper = styled.section`
  max-width: 80vw;
  margin: 2rem auto;
`

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        excerpt(pruneLength: 255)
        fields {
          slug
        }
        frontmatter {
          category
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`