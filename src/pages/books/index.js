import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components'

const Books = (props) => {
  return (
    <main className="page">
      <div className="inner-mw mobile-pd">
        <h2 className="page-title border-b">Books</h2>
        <section className="page-content">
          <BooksContent className="books">
            <div className="book border-b">
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
                  deeper, magical dimensions of Sri Dhama. It offers a tangible
                  glimpse of this enchanted realm, not easily seen...
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
        </section>
      </div>
    </main>
  );
};

export default Books;

const BooksContent = styled.div`
 
  padding-bottom: 0;

  .book {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .book-info {
    flex: 1;
    border-bottom: 3px solid var(--grey);
  }

  .bold {
    font-weight: 900;
  }

  .book-info {
    display: flex;
    flex-direction: column;

    padding-bottom: 2rem;
  }

  .book-info p:first-child {
    margin-top: 1em;
  }

  .book-info p {
    margin-bottom: 0.25em;
  }

  button {
    align-self: baseline;
    margin-top: 0.5em;

    padding: 0.5em 1.5em;
    border: none;
    background-color: var(--clr-grey-10);

    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-decoration: none;
    color: var(--dark);

    outline: none;
  }

  a {
    color: inherit;
  }

  @media screen and (min-width: 768px) {

    .book {
      flex-direction: row;
      align-items: center;
    }

    .book-info {
      padding-left: 2em;
      align-self: flex-start; 
    }

    .book-img {
      width: 100%;
      height: 100%;
      min-width: 440px;
      min-height: 350px;
    }

    .book-img-container {
      min-width: 440px;
      min-height: 350px;
    }
  }
`;
