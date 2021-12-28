import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const PhotoBook = () => {
  return (
    <Wrapper className="photo-book">
      <figure className="photo-book-figure">
        <StaticImage
          src="../assets/images/photo-book.jpg"
          alt="photo-book"
          className="photo-book-img"
        />
      </figure>
      <article className="photo-book-info">
        <div className="photo-book-text-box">
          <h2>Photo Book</h2>
          <p>Appreciating New Vrindaban-dhama</p>
        </div>
      </article>
    </Wrapper>
  );
};

export default PhotoBook;

const Wrapper = styled.section`
  background: #f4f1f3;

  display: grid;
  grid-template-areas:
    "pb-figure"
    "pb-info";

  .photo-book-figure {
    grid-area: pb-figure;
    max-width: 80%;
    margin: 0 auto;
  }

  .photo-book-info {
    grid-area: pb-info;

    margin-top: -6rem;
    padding-top: 8rem;
    padding-bottom: 1rem;

    background: var(--clr-red);

    font-family: "Montserrat", sans-serif;
    color: var(--clr-white);
  }

  .photo-book-info h2 {
    margin-bottom: 0;

    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 700;
  }

  .photo-book-info p {
    margin-bottom: 0;

    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 500;
    font-style: italic;
  }

  .photo-book-text-box {
    margin-top: -1em;
    text-align: center;
  }

  @media screen and (min-width: 992px) {
    background: var(--clr-red);

    grid-template-areas: "pb-figure pb-info";

    .photo-book-figure {
      max-width: 100%;
      margin: 0 10rem;
    }

    .photo-book-img {
      display: block;
      margin: 0 auto;
      margin-top: -4rem;
      width: 50%;
    }

    .photo-book-info {
      grid-area: pb-info;

      margin-top: 0;
      padding: 0.75em 0;
      margin-right: 14rem;
    }

    .photo-book-text-box {
      margin-top: 0;
    }

    .photo-book-info h2 {
      font-size: 1.6rem;
    }

    .photo-book-info p {
      font-size: 1.5rem;
      letter-spacing: 4px;
    }
  }
`;
