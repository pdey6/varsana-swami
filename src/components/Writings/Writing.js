import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";

const Writing = ({ excerpt, frontmatter, fields}) => {
  const { title, cover, date } = frontmatter;
  const { slug } = fields 


  return (
    <Wrapper>
      <GatsbyImage image={getImage(cover)} alt={title} className="image" />
      <div className="info">
        <span className="date">{date}</span>
        <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        <button>
          <Link to={slug} className="link">
            Read More
          </Link>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 2em 0;
  border-bottom: 3px solid var(--clr-grey-10);




  .info {
    display: flex;
    flex-direction: column;
    margin-top: 1rem; 
  }

  .date {
    margin-top: 0.75em;

    font-size: clamp(0.8rem, 3vw, 1rem);
    font-family: "Roboto", sans-serif;
    font-weight: 500;

    color: #897a76;
  }

  .title {
    margin-bottom: 0.5em;

    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
  }


  .excerpt {
    margin-bottom: 1em;

    font-size: 1.15rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    letter-spacing: -.25px; 
  }

  button {
    align-self: baseline;

    margin-top: auto;
    padding: 1em 1.25em;
    border: none; 
    background-color: var(--clr-grey-10);

    
    text-decoration: none;
    

    outline: none; 
  }

  button a {
    color: var(--black);
    font-size: 1rem; 
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: var(--dark);
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    column-gap: 5rem;

    padding: 3em 0;

    :nth-child(odd) > div:nth-child(even) {
      order: 1;
    }

    :nth-child(even) > div:nth-child(odd) {
      order: 2;
    }

    .image {
      height: 100%;
      /* max-height: 25rem; */
    }

    .info {
      margin-top: 0;
      height: 443px; 
    }

    .writing-date {
      margin-top: 0;
      margin-bottom: 0.75em;
    }

    .image {
      height: 443px;
    }

  }
`;

export default Writing;
