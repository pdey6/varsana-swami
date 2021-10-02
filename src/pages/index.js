import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SEO from "../components/SEO";
import Writings from "../components/Writings";

import styled from "styled-components";

import wave1 from "../assets/images/wave-1.svg";

const HomePage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: writings },
  } = data;

  return (
    <>
      <SEO title="Home" />
      <main className="home-page">
        <header>
          <div className="hero">
            <StaticImage
              src="../assets/images/hero.jpg"
              alt="pond"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
          </div>
          <img src={wave1} alt="wave" className="wave wave-up" />
          <div className="welcome">
            <div className="welcome-center">
              <article>
                <h3>Welcome</h3>
                <p>
                  With her every breath, our Mother Earth beckons us “listen,
                  awaken, experience, and behold the magnificence of our Lord’s
                  creation”.
                </p>
                <p>
                  We hope and pray that by visiting this site you feel more
                  personally connected to the Earth, our Mother, more deeply
                  rooted in Sri Dhama, our Home, and more committed to Sri Nama,
                  our Shelter.
                </p>
                <p>
                  May you find inspiration to journey into deeper realms of the
                  heart, as revealed in devotee relationships, to attain Goloka
                  Vrindavan, our final cherished destination.
                </p>
                <p></p>
                <h2 className="welcome-signature">Varsana Swami</h2>
              </article>
              <StaticImage
                src="../assets/images/welcome.jpg"
                alt="portrait"
                className="welcome-img"
              />
            </div>
          </div>
        </header>
        <section className="photo-book">
          <StaticImage
            src="../assets/images/photo-book.jpg"
            alt="photo-book"
            className="photo-book-img"
          />
          <article className="photo-book-info">
            <div className="photo-book-text-box">
              <h2>Photo Book</h2>
              <p>Appreciating New Vrindaban-dhama</p>
            </div>
          </article>
        </section>
        <Writings writings={writings} />
        <FounderStyled>
          <div className="inner-container">
            <ContentStyled>
              <ImageStyled>
                <StaticImage
                  src="../assets/images/founder.jpg"
                  alt="founder"
                  className="image"
                />
              </ImageStyled>
              <TextStyled>
                <h3>His Divine Grace</h3>
                <h2 className="swami">A.C. Bhaktivedanta Swami Prabhupada</h2>
                <h3 className="iskcon">
                  Founder-Acharya of the International Society for Krishna
                  Consciousness
                </h3>
                <div className="links">
                  <a href="https://prabhupada.krishna.com/">
                    https://prabhupada.krishna.com/
                  </a>
                  <a href="https://prabhupadavani.org/">
                    https://prabhupadavani.org/
                  </a>
                  <a href="https://en.wikipedia.org/wiki/A._C._Bhaktivedanta_Swami_Prabhupada">
                    https://en.wikipedia.org/wiki/A._C._Bhaktivedanta_Swami_Prabhupada
                  </a>
                </div>
              </TextStyled>
            </ContentStyled>
          </div>
        </FounderStyled>
      </main>
    </>
  );
};

export default HomePage;

const FounderStyled = styled.section`
  padding: 3em 0;

  font-family: "Roboto", sans-serif;
`;
const ContentStyled = styled.div`
  @media (min-width: 800px) {
    display: flex;

    
  }
`;

const ImageStyled = styled.div`
  .image {
    border-radius: 1rem;
  }

  @media (min-width: 800px) {
    .image {
      width: 100%;
      min-width: 504px;
      min-height: 306px;
    }
  }
`;

const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2em 0 0 2em;
  padding-left: 1em;

  h3 {
    font-size: clamp(0.8rem, 3vw, 1.4rem);
    margin-bottom: 0;
    font-weight: 700;
  }

  .swami {
    margin: 0.5em 0;

    font-size: clamp(1rem, 3vw, 1.8rem);
  }

  .iskcon {
    text-align: center;
    width: 98%;
    font-size: clamp(1rem, 3vw, 1.2rem);
    margin-bottom: 1em;
  }

  .links {
    margin: 0 auto;
    max-width: 100%;
  }

  .links a {
    display: block;
    text-decoration: none;
    text-align: center;
    color: var(--dark);
    overflow-wrap: anywhere;
  }

  @media (min-width: 800px) {
    width: 100%;

    .swami {
      text-align: center;
    }
  }
`;

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
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
