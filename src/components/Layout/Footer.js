import React from "react";
import { AiFillFacebook, AiFillMail } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import dham from "../../assets/images/DhamSeva.png";
import wave2 from "../../assets/images/wave-2.svg";

const Footer = () => {
  return (
    <>
      <img src={wave2} className="wave" />
      <footer className="footer">
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
      </footer>
    </>
  );
};

export default Footer;
