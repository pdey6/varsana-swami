import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import wave1 from "../../assets/images/wave-1.svg";

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
      <div className="welcome-wrap">
        <img src={wave1} alt="wave" className="wave wave-up" />
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
              personally connected to the Earth, our Mother, more deeply rooted
              in Sri Dhama, our Home, and more committed to Sri Nama, our
              Shelter.
            </p>
            <p>
              May you find inspiration to journey into deeper realms of the
              heart, as revealed in devotee relationships, to attain Goloka
              Vrindavan, our final cherished destination.
            </p>
            <p></p>
            <h2 className="welcome-signature">Varsana Swami</h2>
          </article>
          <figure>
            <StaticImage
              src="../../assets/images/welcome.jpg"
              alt="portrait"
              className="welcome-image"
            />
          </figure>
        </section>
      </div>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.header`
  .welcome {
    display: grid;
    grid-template-areas:
      "w-figure"
      "w-article";
    margin-top: -1.25rem;
    padding: 0 1em 1em;
  }

  .welcome article {
    font-family: "Marck Script", cursive;
    grid-area: w-article;
  }

  .welcome figure {
    grid-area: w-figure;
  }

  .welcome-image {
    display: block;
    margin: 0 auto;
    border-radius: var(--borderRadius);
  }

  .welcome h3 {
    margin-bottom: 0;

    font-family: inherit;
    font-weight: 700;
    font-size: 2rem;
  }

  .welcome p {
    margin-bottom: 0.25em;
    font-size: 1.3rem;
  }

  .welcome-signature {
    margin-bottom: 0;
    margin-left: 6.5em;

    font-size: 1.7rem;
    font-family: inherit;
    font-weight: 700;
    /* background-image:  url("/bg-leaf.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;  */
  }

  @media screen and (min-width: 992px) {
    .hero {
      position: relative;
      z-index: -5;
    }

    .hero-img {
      border-radius: var(--borderRadius);
    }

    .welcome-wrap {
      background: var(--clr-pink);
      background: linear-gradient(182.36deg, #e8c9df 24.69%, #f4f1f3 102.14%);
      margin-top: -1rem;
    }

    .hero {
      height: 70%;
    }

    .hero-img {
      border-radius: 0;
    }

    .welcome-wrap {
      margin-top: -4rem;
      width: 100%;
      height: 88%;
    }

    .welcome article {
      margin-top: -1.5rem;
    }

    .welcome {
      display: grid;
      grid-template-areas: "w-article w-figure";
      margin-top: -1.25rem;
      padding: 0 1em 1em;
    }

    .welcome {
      grid-template-columns: 1fr 350px;
      align-items: center;
      gap: 6%;
      width: 80vw;
      margin: 0 auto;
      padding: 0 1em;
      margin-top: -3rem;
      padding-bottom: 3rem;
    }

    .welcome h3 {
      font-size: 2.25rem;
    }

    .welcome-signature {
      font-size: 1.8rem;
      text-align: right;
      margin-right: 2.6em;
    }

    .welcome-img {
      order: 2;
    }
  }
`;
