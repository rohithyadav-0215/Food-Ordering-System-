import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={qouteImg} alt="" className="quote" />
              <p>
              Absolutely love ordering from this Restaurant ! Their online platform 
              is user-friendly, making it a breeze to browse through their extensive 
              menu. The food always arrives promptly and is packed with care, 
              ensuring freshness and flavor. Whether it's a quick lunch or a special 
              dinner, This Restaurant never disappoints. The diverse options cater 
              to every craving, and the ordering process is seamless. Highly 
              recommended for a hassle-free and delicious dining experience!
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>Rohith </h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
