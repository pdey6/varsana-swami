import React from "react";

import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Link, graphql } from "gatsby";
import leaf from "../assets/css/leaf.png";

const PostTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const posts = data.allMarkdownRemark.edges;
  const header = data.catsJson;

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
              {posts.map((post) => {
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
                );
              })}
            </ul>
          </div>
        </div>
      </header>
      <article className="writing">
        <div className="cover-wrapper">
          <GatsbyImage
            image={getImage(frontmatter.cover)}
            alt={frontmatter.title}
            className="writing-img"
          />
        </div>
        <h2 className="writing-title">{frontmatter.title}</h2>
        <section
          className="writing-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Wrapper>
  );
};

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
`;

export const query = graphql`
  query PostTemplate($category: String!, $slug: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { in: [$category] } } }
      sort: { fields: frontmatter___date }
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
          }
        }
      }
    }
    catsJson(slug: { eq: $category }) {
      title
      fontColor
      bgColor
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`;

export default PostTemplate;
