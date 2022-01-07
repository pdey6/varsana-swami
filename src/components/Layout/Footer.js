import React from "react";
import { AiFillFacebook, AiFillMail, AiOutlineInstagram } from "react-icons/ai";
import { FaMapMarkerAlt, FaYoutube, FaSoundcloud } from "react-icons/fa";
import styled from "styled-components";

import dham from "../../assets/images/DhamSeva.png";
import wave2 from "../../assets/images/wave-2.svg";

const Footer = () => {
  return (
    <Wrapper>
      <img src={wave2} className="wave" />
      <div className="footer">
        <div className="inner-mw mobile-pd mobile-center">
          <section className="info">
            <div className="info-col-1">
              <a href="mailto:moontowerbooks@gmail.com" className="icons">
                <AiFillMail className="icon" />
                <p>Email Us</p>
              </a>
              <div className="icons">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <p>3759 McCreary's Ridge Rd</p>
                  <p>NBU 31</p>
                  <p>Moundsville, WV 26041</p>
                </div>
              </div>
            </div>
            <div className="info-col-3">
              <p> Varsana Swami</p>
              <div className="icons ">
                <a
                  href="https://www.facebook.com/varsanaswami"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook className="icon" />
                </a>
                <a
                  href="https://www.facebook.com/varsanaswami"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram className="icon" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCRU2uERYaKK3rnO32GOfqlA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="icon" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCRU2uERYaKK3rnO32GOfqlA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSoundcloud className="icon" />
                </a>
              </div>
              <p>Dham Seva Inc.</p>
              <div className="icons">
                <a
                  href="https://www.facebook.com/DhamSevaInc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook className="icon" />
                </a>
              </div>
            </div>
            <div className="info-col-2">
              <img src={dham} alt="dham seva" />
            </div>
          </section>
        </div>

        <section className="copyright inner-mw mobile-pd">
          <p>&copy; {new Date().getFullYear()} Varsana Swami</p>
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

  .mobile-center {
    width: min-content; 
  }

  .info {
    display: grid;
    grid-template-columns: 1fr;
  }

  .info p {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .info-col-2 {
     display: flex;
     flex-direction: column;
     align-items: center; 
    }

  .icons {
    display: flex;
    align-items: center;

    margin-bottom: 0.75em;
  }

  .icon {
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;

    margin-right: 0.75rem;
  }

  a {
    color: inherit;
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

    .mobile-center {
    width: unset; 
  }

    .info {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 1em 0 0;
    }

    .info-col-1,
    .info-col-2,
    .info-col-3 {
      margin: 0 auto;
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
