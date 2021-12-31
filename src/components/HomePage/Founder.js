import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Founder = () => {
  return (
    <Wrapper>
      <div className="inner-mw">
        <div className="info">
          <figure>
            <StaticImage
              src="../../assets/images/founder.jpg"
              alt="founder"
              className="image"
            />
          </figure>
          <article>
            <h3>His Divine Grace</h3>
            <h2>A.C. Bhaktivedanta Swami Prabhupada</h2>
            <h4>
              Acharya of the International Society for Krishna Consciousness
            </h4>
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
      </div>
    </Wrapper>
  );
};

export default Founder;

const Wrapper = styled.section`
  padding: 3em 1em;
  font-family: "Roboto", sans-serif;

  .info {
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    gap: 6%;
  }

  figure {
    border-radius: 1rem;
  }

  article {
    text-align: center;
    overflow-wrap: break-word;
  }

  article h3 {
    font-size: 1.2rem;
    margin-bottom: 0;
    font-weight: 700;
  }

  article h2 {
    margin: 0.5em 0;
    font-size: clamp(1rem, 3vw, 1.8rem);
  }

  article h4 {
    text-align: center;
    width: 98%;
    font-size: clamp(1rem, 3vw, 1.2rem);
    margin-bottom: 1em;
  }

  article .links {
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

  .image {
    border-radius: 1rem;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 1em;


    .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    figure .image {
      width: 100%;
      height: 100%;
    }

    article {
      display: flex;
      flex-direction: column;
      justify-content:space-between; 
      height: 443px;
    }
  }
`;
