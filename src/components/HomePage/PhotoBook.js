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

const Wrapper = styled.section``;
