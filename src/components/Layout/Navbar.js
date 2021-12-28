import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import styled from "styled-components";
import data from "./links";

import Dropdown from "./Dropdown";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [links, setLinks] = useState(data);

  return (
    <Wrapper className="navbar">
      <div className="nav-center">
        <div className="nav-title">
          <Link to="/">
            <h1 className="site-title">Varsana Swami</h1>
            <h3 className="site-description">
              Service to the Dhama and Stewardship of the Earth
            </h3>
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            to="/dhamseva"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Dham-seva
          </Link>

          {links.map((link) => {
            return <Dropdown key={links.id} {...link} className="dropdown" />;
          })}

          <Link
            to="/books"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Books
          </Link>

          <div className="nav-link">
            <a href="/" className="donate-link" onClick={() => setShow(false)}>
              Donate
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;

  .site-title {
    margin-bottom: 0.25rem;

    font-family: "Dancing Script", cursive;
    font-size: 2.5rem;
    font-weight: 700;

    color: var(--clr-black);
  }

  .site-description {
    margin-bottom: 0;

    font-family: "Dancing Script", cursive;
    font-size: 0.9rem;

    color: var(--clr-black);
  }

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
  }
  .nav-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5em;
  }
  .nav-title img {
    width: 200px;
    margin-left: -6px;
    margin-bottom: -9px;
  }
  .nav-btn {
    padding: 0.15rem 0.75rem;
  }
  .nav-btn svg {
    font-size: 1.5rem;
  }

  .nav-icon {
    margin-bottom: -3px;
    margin-left: 4px;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 0;

    overflow: hidden;
    transition: var(--transition);
  }

  .show-links {
    height: 23.9375rem;
    height: fit-content;
  }

  .nav-link {
    display: block;
    border-top: 1px solid var(--clr-grey-50);
    padding: 0.5em 0;

    color: var(--clr-black);
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: var(--f-spacing);
    transition: var(--transition);
  }

  .active-link {
    color: var(--primary-500);
  }

  .donate-link {
    font-family: Montserrat;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    color: var(--clr-black);
  }

  .dropdown {
    position: relative;
  }

  button {
    font-family: var(--bodyFont);
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    letter-spacing: var(--letterSpacing);
    padding: 0;
    box-shadow: none;
    transition: var(--transition);
    text-transform: capitalize;
  }

  

  @media screen and (min-width: 992px) {
    .site-title {
      margin-left: 5rem;
      font-size: 2.4rem;
    }

    .site-description {
      font-size: 1.25rem;
    }

    .nav-center {
      display: flex;
      align-items: center;
    }

    .nav-title {
      height: auto;
      margin: 1rem 0;
      margin-left: 0.5em;
    }

    .nav-btn {
      display: none;
    }

    .nav-links {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      height: auto !important;
      flex-basis: 55%;
      margin-left: auto;
      overflow: unset;
    }

    .nav-link {
      /* margin-right: 1em; */
      border-top: none;
      padding: 0;

      font-size: 1rem;
      font-weight: 700;
    }

    .donate-link {
      justify-content: flex-end;
      align-items: center;
      margin-right: 0;
    }

    button {
      border-top: none;
      padding: 0;
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;
