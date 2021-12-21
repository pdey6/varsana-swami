import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";

const Writing = ({ excerpt, frontmatter, fields}) => {
  const { title, cover, date } = frontmatter;
  const { slug } = fields 


  return (
    <Wrapper>
      <GatsbyImage image={getImage(cover)} alt={title} className="writing-img" />
      <div className="writing-info">
        <span className="writing-date">{date}</span>
        <h3 className="writing-title">{title}</h3>
        <p className="writing-excerpt">{excerpt}</p>
        <button>
          <Link to={slug} className="writing-link">
            Read More
          </Link>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 2em 0;
  border-bottom: 3px solid var(--grey);


  .writing-img {
    border-radius: var(--borderRadius);
  }

  .writing-info {
    display: flex;
    flex-direction: column;
    margin-top: 1rem; 
  }

  .writing-date {
    margin-top: 0.75em;

    font-size: clamp(0.8rem, 3vw, 1rem);
    font-family: "Roboto", sans-serif;
    font-weight: 500;

    color: #897a76;
  }

  .writing-title {
    margin-bottom: 0.5em;

    font-size: 1.8rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
  }


  .writing-excerpt {
    margin-bottom: 1em;

    font-size: 1.3rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  button {
    align-self: baseline;

    margin-top: auto;
    padding: 1em 1.25em;
    border: none; 
    background-color: var(--grey);

    
    text-decoration: none;
    

    outline: none; 
  }

  button a {
    color: var(--black);
    font-size: 1.1rem; 
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: var(--dark);
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 5rem;

    padding: 4em 0;

    :nth-child(odd) > div:nth-child(even) {
      order: 1;
    }

    :nth-child(even) > div:nth-child(odd) {
      order: 2;
    }

    .writing-img {
      height: 100%;
      max-height: 25rem;
    }

    .writing-info {
      margin-top: 0; 
    }

    .writing-date {
      margin-top: 0;
      margin-bottom: 0.75em;
    }
  }
`;

export default Writing;
