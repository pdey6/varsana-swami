import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Founder = () => {
  return (
    <Wrapper className="founder">
      <div className="founder-info">
        <figure className="founder-figure">
          <StaticImage
            src="../assets/images/founder.jpg"
            alt="founder"
            className="image"
          />
        </figure>
        <article className="founder-text-box">
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
        </article>
      </div>
    </Wrapper>
  );
};

export default Founder;

const Wrapper = styled.section`
  padding: 3em 1em;

  font-family: "Roboto", sans-serif;

  .founder-info {
    display: grid;
    grid-template-areas:
      "f-figure"
      "f-article";
    width: 80%;
    margin: 0 auto;
    gap: 6%;
  }

  .founder-figure {
    grid-area: f-figure;
  }

  .founder-text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* margin-top: 1rem; */

    grid-area: f-article;
  }

  .founder-text-box h3 {
    font-size: clamp(0.8rem, 3vw, 1.4rem);
    margin-bottom: 0;
    font-weight: 700;
  }

  .founder-text-box .swami {
    margin: 0.5em 0;
    font-size: clamp(1rem, 3vw, 1.8rem);
  }

  .founder-text-box .iskcon {
    text-align: center;
    width: 98%;
    font-size: clamp(1rem, 3vw, 1.2rem);
    margin-bottom: 1em;
  }

  .founder-text-box .links {
    margin: 0 auto;
    max-width: 100%;
  }

  .founder-text-box .links a {
    display: block;
    text-decoration: none;
    text-align: center;
    color: var(--dark);
    overflow-wrap: anywhere;
  }

  .image {
    border-radius: 1rem;
  }

  @media (min-width: 768px) {
    .founder-info {
      display: grid;
      grid-template-areas: "f-figure f-article";
    }

    .founder-text-box {
      width: 100%;
    }

    .founder-text-box .swami {
      text-align: center;
    }

    .image {
      width: 100%;
      min-width: 504px;
      min-height: 306px;
    }
  }
`;
