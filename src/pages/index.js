import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Writings from "../components/Writings";
import Welcome from "../components/HomePage/Welcome";
import PhotoBook from "../components/HomePage/PhotoBook";
import Founder from "../components/HomePage/Founder";


const HomePage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: writings },
  } = data;

  return (
    <>
      <SEO title="Home" />
      <main className="home-page">
        <Welcome />
        <PhotoBook /> 
        <Writings writings={writings} />
        <Founder />
      </main>
    </>
  );
};

export default HomePage;



export const query = graphql`
  {
    allMarkdownRemark(limit: 8) {
      nodes {
        id
        excerpt(pruneLength: 255)
        fields {
          slug
        }
        frontmatter {
          title
          category
          date(formatString: "MMMM, Do YYYY")
          cover {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
