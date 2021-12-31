import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const PhotoBook = () => {
  return (
    <Wrapper className="photo-book">
      <div className="inner-mw grid">
        <figure>
          <StaticImage
            src="../../assets/images/photo-book.jpg"
            alt="photo-book"
            className="img"
          />
        </figure>
        <article>
          <div className="text-box">
            <h2>Photo Book</h2>
            <p>Appreciating New Vrindaban-dhama</p>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

export default PhotoBook;

const Wrapper = styled.section`
  background: #f4f1f3;

  .grid {
    display: grid;
    grid-template-areas:
      "pb-figure"
      "pb-info";
  }

  figure {
    grid-area: pb-figure;
    display: flex;
    justify-content: center;
  }

  article {
    grid-area: pb-info;

    margin-top: -6rem;
    padding-top: 8rem;
    padding-bottom: 1rem;

    background: var(--clr-red);

    font-family: "Montserrat", sans-serif;
    color: var(--clr-white);
  }

  .text-box h2 {
    margin-bottom: 0;

    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 700;
  }

  .text-box p {
    margin-bottom: 0;

    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 500;
    font-style: italic;
  }

  .text-box {
    margin-top: -1em;
    text-align: center;
  }

  @media screen and (min-width: 992px) {
    background: var(--clr-red);

    .grid {
      grid-template-areas: "pb-figure pb-info";
      margin-top: -1rem;
    }

    figure {
      margin-left: 4rem; 
    }

    .img {
      max-height: 167px;
      margin-top: -4rem;
    }

    article {
      grid-area: pb-info;

      margin-top: 0;
      padding: 0.75em 0;
    }

    .text-box {
      margin-top: 0;
    }

    .text-box h2 {
      font-size: 1.6rem;
    }

    .text-box p {
      font-size: 1.5rem;
      letter-spacing: 4px;
    }
  }
`;
