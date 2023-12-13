import React from "react";
import AboutBackground from "../Assets-1/about-background.png";
import AboutBackgroundImage from "../Assets-1/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Experience the Artistry of Coffee with Every Pour
        </h1>
        <p className="primary-text">
           Coffee is a popular beverage made from roasted coffee beans, which are the seeds of the Coffea plant. It is one of the most widely consumed drinks globally, renowned for its distinct flavor and stimulating effects due to the presence of caffeine.
        </p>
      </div>
    </div>
  );
};

export default About;
