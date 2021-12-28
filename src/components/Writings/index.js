import React from "react";
import Writing from "./Writing";
import styled from "styled-components";

const Writings = ({ writings }) => {
  return (
    <Wrapper>
      {writings.map((writing) => {
        return <Writing key={writing.id} {...writing} />;
      })}
    </Wrapper>
  );
};

export default Writings;

const Wrapper = styled.section`
  background: #fbfaf9;
  max-width: var(--max-width);
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    width: 80vw;
    margin: 0 auto;
    padding: 0 1em;
  }
`;
