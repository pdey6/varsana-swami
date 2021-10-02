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
        <div className="page-content-center">
          <BooksContent className="books">
            <div className="book">
              <Link to="/books/single-book">
                <div className="book-img-container">
                  <StaticImage
                    src="../../assets/images/books-photo.jpg"
                    alt=""
                    className="book-img"
                  />
                </div>
              </Link>

              <div className="book-info body-font">
                <p>Photo-Book:</p>
                <p className="bold">
                  "Appreciating New Vrindaban-dhama Her beauty and glory,
                  message and grace"
                </p>
                <p>
                  Maharaja’s photo book is an invitation to realize and enter
                  its deeper, magical dimensions of Sri Dhama. It offers a
                  tangible glimpse of this enchanted realm, not easily seen...
                </p>
                <button>
                  <Link to="/books/single-book"> Read More </Link>
                </button>
              </div>
            </div>
            <div className="book">
              <div className="book-img-container">
                <StaticImage
                  src="../../assets/images/sri-gaura.jpg"
                  alt=""
                  className="book-img"
                />
              </div>
              <div className="book-info body-font">
                <p>Currently unavailable </p>
                <p>Sri Gaura Lila: Nimai of Nadia </p>
                <p>Early pastimes Sri Caitanya Mahaprabhu in Navadvipa.</p>
              </div>
            </div>
          </BooksContent>
        </div>
      </section>
    </main>
  );
};

export default Books;

const BooksContent = styled.div`
  margin-top: 1.5rem;
  padding-bottom: 8rem;

  .book {
    display: flex;
    flex-direction: column;

    margin-bottom: 3em;
  }

  .book-info {
    flex: 1;
  }

  .bold {
    font-weight: 900;
  }

  .book-info {
    display: flex;
    flex-direction: column;

    padding: 0;
  }

  .book-info p {
    margin-bottom: 0.25em;
  }

  button {
    align-self: baseline;

    margin-top: 1.25em;
    padding: 0.5em 1.5em;
    border: none;
    background-color: var(--grey);

    font-size: clamp(0.8rem, 3vw, 1rem);
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-decoration: none;
    color: var(--dark);

    outline: none;
  }

  a {
    color: inherit;
  }

  @media (min-width: 800px) {
    .book {
      flex-direction: row;
    }

    .book-info {
      padding: 0 0 0 2em;
    }

    .book-img {
      width: 100%;
      height: 100%;
    }

    .book-img-container {
      min-width: 440px;
      min-height: 350px; 
    }
  }
`;
