import React, { useState } from "react";
import { Link } from "gatsby";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import styled from "styled-components";

const Dropdown = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Wrapper>
      <header>
        <h4 className="nav-link">{title}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {showInfo ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
      </header>
      {showInfo && (
        <div className="submenu">
          {info.map((i) => {
            const r = i.route;
            return (
              <Link
                to={r}
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                {i.name}
              </Link>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  header {
    display: flex;
    align-items: center;
  }

  header h4 {
    margin: 0;
  }

  .nav-link {
    text-align: left;
  }

  @media only screen and (min-width: 768px) {
    .submenu {
      display: block;
      position: absolute;
      min-width: 160px;
      transform: translateX(-16px);
      border-radius: 0.5rem;
      z-index: 1;
      padding: 1em;
      margin-right: -1em;  
      background-color: var(--clr-white); 
    }
  }
`;
