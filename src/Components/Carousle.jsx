import React from "react";
import "./Carousle.css";

const Carousel = ({ items }) => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
