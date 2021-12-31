import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import wave3 from "../assets/images/wave3.svg";


const PostTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const posts = data.allMarkdownRemark.edges;
  const header = data.catsJson;

  return (
    <main className="writings">
      <header>
        <GatsbyImage
          image={header.image.childImageSharp.gatsbyImageData}
          alt={header.title}
          className="banner"
        />

        <div style={{ backgroundColor: `${header.bgColor}` }}>
          <div className="writing-category inner-mw">
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
        <img src={wave3} className="wave wave-up" />
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
    </main>
  );
};

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
