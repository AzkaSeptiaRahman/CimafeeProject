import React from "react";
import profile1 from "../Assets-1/Kite.png";
import profile2 from "../Assets-1/Azka.png";
import profile3 from "../Assets-1/Adel.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <h2 className="footer-section-one">Our Team</h2>
        <div className="developer-info">
          <div className="developer">
            <img src={profile1} alt="Developer 1" />
            <div className="developer-details">
              <p>Shafa Salsabila Khansa</p>
              <p>1120093000016</p>
            </div>
          </div>
          <div className="developer">
            <img src={profile2} alt="Developer 2" />
            <div className="developer-details">
              <p>Azka Septia Rahman</p>
              <p>11200930000013</p>
            </div>
          </div>
          <div className="developer">
            <img src={profile3} alt="Developer 3" />
            <div className="developer-details">
              <p>Della Novia Ramadhan</p>
              <p>11200930000015</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
