import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";

const Writing = ({ excerpt, frontmatter, fields}) => {
  const { title, image, date } = frontmatter;
  const { slug } = fields 


  return (
    <Wrapper>
      <GatsbyImage image={getImage(image)} alt={title} className="writing-img" />
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

  :last-child {
    border-bottom: none;
  }

  .writing-img {
    border-radius: var(--borderRadius);
  }

  .writing-date {
    margin-bottom: 0.75em;

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
    align-self: flex-start;
  }

  button a {
    color: var(--black);
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

  .writing-date {
    
  }

  .writing-title {
    
  }

  .writing-excerpt {
    
  }

    .writing-img {
      height: 100%;
      max-height: 25rem;
    }
  }
`;

export default Writing;
