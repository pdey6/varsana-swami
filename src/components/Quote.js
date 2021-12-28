import React from "react";
import styled from "styled-components";

const Quote = ({ color, quote, author }) => {
  return (
    <Wrapper className={`${color}`}>
      <blockquote className="quote">“ {quote} ”</blockquote>
      <p className="author">- {author}</p>
    </Wrapper>
  );
};

export default Quote;

const Wrapper = styled.article`
  
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    margin-bottom: 1em;
    border-radius: 0.5rem;
    padding: 1em;
  

  .quote {
    margin: 0;
    padding: 0 0.25em;

    font-size: 1.3rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  .author {
    margin: 0;

    font-size: 1.3rem;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 2px;
    text-align: right;
  }
`;
