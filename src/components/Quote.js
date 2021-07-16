import React from "react";

const Quote = ({ color, quote, author }) => {
  return (
    <article className={`quote-container ${color}`}>
      <blockquote className="quote">“ {quote} ”</blockquote>
      <p className="author">- {author}</p>
    </article>
  );
};

export default Quote;

