import React from "react";
import BannerBackground from "../Assets-1/home-banner-background.png";
import BannerImage from "../Assets-1/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Discover the Best Coffee Gems in Cimanggis
          </h1>
          <p className="primary-text">
            Sip, Savor and Explore! Let you uncover hidden coffee treasures in
            Cimanggis with our web app!
          </p>
          <button
            className="secondary-button"
            onClick={() => (window.location.href = "/map")}
          >
            Navigate Me! <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
