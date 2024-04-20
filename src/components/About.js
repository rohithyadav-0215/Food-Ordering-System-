import React from "react";
import AboutImg from "../assets/images/about-img.jpeg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            "At [Our Restaurant], we take pride in crafting exceptional dishes that 
            tantalize the taste buds and leave a lasting impression. What sets our food 
            apart is the meticulous attention to detail and the use of only the freshest, 
            locally sourced ingredients. Each dish is a harmonious blend of flavors, 
            carefully curated by our passionate chefs who infuse creativity and innovation 
            into every recipe. From savory starters to mouthwatering mains and delectable 
            desserts, our menu reflects a commitment to quality and authenticity. Whether 
            it's our signature dishes or daily specials, every bite tells a story of 
            culinary excellence and dedication to serving memorable dining experiences.
            </p>
            <p>
            At [Our Restaurant],we invite you to savor the difference and indulge 
            in a culinary journey like no other."
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
