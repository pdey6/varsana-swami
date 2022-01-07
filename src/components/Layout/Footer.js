import React from "react";
import { AiFillFacebook, AiFillMail } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import styled from "styled-components";

import dham from "../../assets/images/DhamSeva.png";
import wave2 from "../../assets/images/wave-2.svg";

const Footer = () => {
  return (
    <Wrapper>
      <img src={wave2} className="wave" />
      <div className="footer">
        <div className="inner-mw mobile-pd">
          <section className="info">
            <div className="info-col info-col-1">
              <div className="icons">
                <AiFillMail className="icon" />
                <p>moontowerbooks@gmail.com</p>
              </div>
              <div className="icons">
                <FaPhoneAlt className="icon" />
                <p>+1 (304) 843-0122 </p>
              </div>
            </div>
            <div className="info-col info-col-3">
              <div className="icons ">
                <AiFillFacebook className="icon" />
                <a href="https://www.facebook.com/varsanaswami" target="_blank" rel="noopener noreferrer"><p> Varsana Swami</p></a>
              </div>
              <div className="icons">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <p>3759 McCreary's Ridge Rd</p>
                  <p>NBU 31</p>
                  <p>Moundsville, WV 26041</p>
                </div>
              </div>
            </div>
            <div className="info-col info-col-2">
              <img src={dham} alt="dham seva" />
            </div>
          </section>
        </div>

        <section className="copyright inner-mw mobile-pd">
          <p>&copy; 1972 - {new Date().getFullYear()} Varsana Swami</p>
        </section>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  .footer {
    margin-top: -1rem;
    background: linear-gradient(182.36deg, #e8c9df 52.69%, #f4f1f3 130.14%);
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .info p {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .icons {
    display: flex;
    align-items: center;

    margin-bottom: 0.75em;
  }

  .icon {
    height: 2rem;
    width: 2rem;

    margin-right: 0.75rem;
  }

  a {
    color: inherit; 
  }

  .info-col {
    margin: 0 auto;
  }

  .copyright {
    padding: 0 0 1em;
    background: var(--grey);

    text-align: center;
  }

  .copyright p {
    margin-bottom: 0;
  }

  @media screen and (min-width: 992px) {
    .footer {
      margin-top: -4rem;
    }

    .info {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 1em 0 0;
    }

    .info-col-1 {
      order: 1;
    }

    .info-col-2 {
      order: 2;
    }

    .info-col-3 {
      order: 3;
    }

  }
`;
