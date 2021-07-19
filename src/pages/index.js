import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SEO from "../components/SEO";
import Writings from "../components/Writings";

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
        <section className="founder">
          <StaticImage
            src="../assets/images/founder.jpg"
            alt="founder"
            className="founder-img"
          />
          <div className="founder-info">
            <h3 className="founder-info-title">His Divine Grace</h3>
            <h2 className="founder-info-swami">
              A.C. Bhaktivedanta Swami Prabhupada
            </h2>
            <h3 className="founder-info-iskcon">
              Founder-Acharya of the International Society for Krishna
              Consciousness
            </h3>
            <div className="founder-info-links">
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
          </div>
        </section>
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
