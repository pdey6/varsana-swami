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
        <section className="footer-info">
          <div className="info-col info-col-1">
            <div className="footer-icons">
              <AiFillMail className="footer-icon" />
              <p>moontowerbooks@gmail.com</p>
            </div>
            <div className="footer-icons">
              <FaPhoneAlt className="footer-icon" />
              <p>+1 (304) 843-0122 </p>
            </div>
          </div>
          <div className="info-col info-col-3">
            <div className="footer-icons ">
              <AiFillFacebook className="footer-icon" />
              <p>Dhamseva Facebook</p>
            </div>
            <div className="footer-icons">
              <FaMapMarkerAlt className="footer-icon" />
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

        <section className="copyright">
          <p>&copy; 1972 - {new Date().getFullYear()} Varsana Swami.</p>
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

.footer-info {
  width: 60vw;
  max-width: var(--max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  
}

.footer-info p {
  font-size: 1rem;
  margin-bottom: 0;
}

.footer-icons {
  display: flex;
  align-items: center;

  margin-bottom: 0.75em;
}

.footer-icon {
  height: 2rem;
  width: 2rem;

  margin-right: 0.75rem;
}

.info-col {
  margin: 0 auto;
}

.copyright {
  padding: 1em;
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

  .footer-info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 1em;
    align-items: center;
    width: 88vw;
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

  .copyright p {
    max-width: 100vw;
    margin-left: 2rem;
  }
}


`