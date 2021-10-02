import React from "react";

import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Link, graphql } from "gatsby";

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const posts = data.allMarkdownRemark.edges
  const { previous, next } = data;
  const header = data.catsJson

  console.log(post);

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
      <article>
        <GatsbyImage
          image={getImage(post.frontmatter.image)}
          alt={post.frontmatter.title}
          className="writing-img"
        />
        <h2 className="writing-title">{post.frontmatter.title}</h2>
        <section
          className="writing-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 88vw;
  max-width: 880px;
  margin: 0 auto;
  margin-bottom: 4rem;

  .writing-category {
    display: flex;
    align-items: center;
    margin-left: 280px;
    padding: 2em 0;
    margin-bottom: 8rem;

    font-family: "Montserrat", sans-serif;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4rem;
  }

  h2 {
    margin: 1em 0;
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: 800;
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
  query GetSinglePost(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $category: String!
  ) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
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
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
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
  }
`;

export default PostTemplate;
