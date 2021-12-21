import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import styled from "styled-components"
import leaf from "../assets/css/leaf.png";

const Category = ({ data }) => {
  const { html } = data.markdownRemark;
  const posts = data.allMarkdownRemark.edges
  const header = data.catsJson

  return (
    <Wrapper>
      <header>
        <GatsbyImage
          image={header.image.childImageSharp.gatsbyImageData}
          alt={header.title}
          className="banner"
        />
        <div style={{ backgroundColor: `${header.bgColor}` }}>
          <div className="writing-category">
            <h1 style={{ color: `${header.fontColor}` }} className="cat-title">
              {header.title}
            </h1>
            <ul className="cat-list">
              {posts.map(post => {
                return (
                  <li
                    key={post.node.fields.slug}
                    style={{ color: `${header.fontColor}` }}
                  >
                    <Link
                      to={post.node.fields.slug}
                      style={{ color: `${header.fontColor}` }}
                      activeStyle={{ fontWeight: 900 }}
                    >
                      {post.node.frontmatter.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </header>
      <article className="writing">
        <div className="cover-wrapper">
          <GatsbyImage
            className="cover"
            image={
              posts[0].node.frontmatter.cover.childImageSharp.gatsbyImageData
            }
            alt={posts[0].node.frontmatter.title}
          />
        </div>
        <h2 className="writing-title">{posts[0].node.frontmatter.title}</h2>
        <section
           className="writing-body"
           dangerouslySetInnerHTML={{ __html: html }}
         />
      </article>
    </Wrapper>
  )
}

export default Category

const Wrapper = styled.section`
  

  margin: 0 auto;
  margin-bottom: 4rem;


  article {
    max-width: 880px;
    margin: 0 auto;

    background: #fbfaf9;
  }

  h2 {
    margin: 1em 0;
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
  }

  nav {
    padding: 1em 0.5em;
  }

  nav ul {
    display: flex;
    justify-content: space-between;
  }
  
`



export const pageQuery = graphql`
query CategoryTemplate($category: String!) {
  allMarkdownRemark(
    limit: 100
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {category: {in: [$category]}}}
  ) {
    edges {
      node {
        html
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          cover {
            childImageSharp {
              gatsbyImageData(width: 600, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
  catsJson(slug: {eq: $category}) {
    title
    fontColor
    bgColor
    image {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
  markdownRemark {
    html
    frontmatter {
      title
      cover {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

`
