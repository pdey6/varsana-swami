import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import styled from "styled-components";

const Books = (props) => {
  return (
    <main className="page">
      <header className="page-header">
        <h2 className="page-title">Books</h2>
      </header>

      <section className="page-content">
        <div className="book">
          <div className="book-img-wrapper">
            <Link to="/books/single-book">
              <StaticImage
                src="../../assets/images/books-photo.jpg"
                alt=""
                className="book-img"
              />
            </Link>
          </div>

          <article className="book-info">
            <p>Photo-Book:</p>
            <p className="bold">
              "Appreciating New Vrindaban-dhama Her beauty and glory, message
              and grace"
            </p>
            <p>
              Maharaja’s photo book is an invitation to realize and enter its
              deeper, magical dimensions of Sri Dhama. It offers a tangible
              glimpse of this enchanted realm, not easily seen...
            </p>
            <button className="books-button">
              <Link to="/books/single-book"> Read More </Link>
            </button>
          </article>
        </div>

        <div className="book">
          <div className="book-img-wrapper">
            <StaticImage
              src="../../assets/images/sri-gaura.jpg"
              alt=""
              className="book-img"
            />
          </div>
          <article className="book-info">
            <p>Currently unavailable </p>
            <p>Sri Gaura Lila: Nimai of Nadia </p>
            <p>Early pastimes Sri Caitanya Mahaprabhu in Navadvipa.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Books;
