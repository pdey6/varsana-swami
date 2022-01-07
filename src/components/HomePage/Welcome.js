import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import wave1 from "../../assets/images/wave-1.svg";
import signature from "../../assets/images/signature.svg";

const Welcome = () => {
  return (
    <Wrapper>
      <figure className="hero">
        <StaticImage
          src="../../assets/images/hero.jpg"
          alt="pond"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
      </figure>

      <img src={wave1} alt="wave" className="wave wave-up" />

      <div className="welcome-wrap">
        <div className="inner-mw mobile-pd">
          <section className="welcome">
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
              <img src={signature} alt="signature" className="signature" />
            </article>
            <figure>
              <StaticImage
                src="../../assets/images/welcome.jpg"
                alt="portrait"
                className="image"
              />
            </figure>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.header`
  .hero {
    margin: 0;
    position: relative;
    z-index: -5;
  }

  .hero-img {
    height: 30vh;
  }

  .welcome-wrap {
    background: var(--clr-pink);
    background: linear-gradient(182.36deg, #e8c9df 24.69%, #f4f1f3 102.14%);
  }

  .welcome {
    display: grid;
    grid-template-areas:
      "w-figure"
      "w-article";
    margin-top: -1.25rem;
    padding: 0;
  }

  .welcome article {
    font-family: "Marck Script", cursive;
    grid-area: w-article;
  }

  .welcome figure {
    grid-area: w-figure;
    padding: 1.5rem;
  }

  .image {
    display: block;
    margin: 0 auto;
  }

  .welcome h3 {
    margin-bottom: 0;

    font-family: inherit;
    font-weight: 700;
    font-size: 2rem;
  }

  .welcome p {
    margin-bottom: 0.25em;
    font-size: 1.24rem;
  }

  .signature {
    margin-bottom: 0;
    margin-left: 6.5em;
    display: block;
    max-width: 14rem;
  }

  @media screen and (min-width: 992px) {
    .hero {
      height: 70%;
    }

    .hero-img {
      border-radius: var(--radius);
      border-radius: 0;
      height: 100%;
    }

   

    .welcome article {
      margin-top: -1.5rem;
      display: flex;
      flex-direction: column;
    }

    .welcome {
      display: grid;
      grid-template-areas: "w-article w-figure";
      margin-top: -1.25rem;
      padding: 0 1em 1em;
      gap: 6%;
      margin: 0 auto;
      padding: 0 1em;
      margin-top: -3rem;
      padding-bottom: 3rem;
    }

    .welcome h3 {
      font-size: 2.25rem;
    }

    .signature {
      margin-left: 0;
      align-self: flex-end;
      margin-top: -1rem;
      margin-right: 2rem;
    }

    .welcome figure {
      align-self: center;
      height: 18rem;
      margin-bottom: 2rem;
      padding: 0;
    }

    .image {
      order: 2;
      height: 100%;
    }
  }
`;
