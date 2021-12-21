import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

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
          <DropdownButton
            id="dropdown-basic-button"
            title="Writings"
            className="nav-link"
          >
            <Dropdown.Item>
              <Link to="/govardhan-katha" onClick={() => setShow(false)}>
                Govardhan Katha
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/nature-meditations" onClick={() => setShow(false)}>
                Nature Meditations
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/simple-living" onClick={() => setShow(false)}>
                Simple Living
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/sadhu-sanga" onClick={() => setShow(false)}>
                Sadhu-Sanga Guru-Disciple
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/vyasa-puja" onClick={() => setShow(false)}>
                Vyasa Puja Offerings
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/personalities" onClick={() => setShow(false)}>
                Personalities
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/relationships" onClick={() => setShow(false)}>
                Relationships
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/sri-dhama" onClick={() => setShow(false)}>
                Sri Dhama
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/miscellaneous" onClick={() => setShow(false)}>
                Miscellaneous
              </Link>
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            id="dropdown-basic-button"
            title="Media"
            className="nav-link"
          >
            <Dropdown.Item>
              <Link to="/media/photos" onClick={() => setShow(false)}>
                Photos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/media/audio" onClick={() => setShow(false)}>
                Audio
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="https://www.youtube.com/channel/UCRU2uERYaKK3rnO32GOfqlA" target="_blank" >
                Video
              </a>
            </Dropdown.Item>
          </DropdownButton>
          
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

{
  /* <FaChevronDown className="nav-icon" /> */
}

const Wrapper = styled.nav`

.nav-link:focus, .nav-link:hover {
    color: var(--grey-1000);
}


button, .btn {
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
  button, .btn {
    border-top: none;
    padding: 0;
    font-size: 1rem;
    font-weight: 700;
  }
}

.btn-primary {
  background-color: transparent;
  border-color: transparent;
  display: block;
  padding: 0.5em 0;
  color: var(--grey-1000);
  font-size: 1.1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
`;
