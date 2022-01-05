import React from "react";
import Writing from "./Writing";
import styled from "styled-components";

const Writings = ({ writings }) => {
  return (
    <Wrapper>
      <div className="inner-mw mobile-pd mobile-pd">
        {writings.map((writing) => {
          return <Writing key={writing.id} {...writing} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Writings;

const Wrapper = styled.section`
  background: #fbfaf9;

  @media screen and (min-width: 992px) {
    padding: 0 1em;
  }
`;
