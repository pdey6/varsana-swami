import React from "react";
import styled from "styled-components";

const Letter = ({ title, date, body }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>“{body}”</p>
    </Wrapper>
  );
};

export default Letter;

const Wrapper = styled.article`
  margin-bottom: 2rem;
  border-bottom: 3px solid var(--grey);

  :last-child {
    border-bottom: none;
  }

  h2, span {
    font-size: 1.8rem; 
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    font-weight: 800;
    letter-spacing: 1.1px;
  }

  h2 {
    margin-bottom: 0.25em;
  }

  p {
    margin-top: 1em;
    font-size: 1.18rem; 

    font-weight: 400;
    letter-spacing: 0.3px;
  }
`;
