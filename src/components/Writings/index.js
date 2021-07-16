import React from "react";
import Writing from "./Writing";

const Writings = ({ writings }) => {
  return (
    <section className="writings">
      {writings.map((writing) => {
        return <Writing key={writing.id} {...writing} />;
      })}
    </section>
  );
};

export default Writings;
