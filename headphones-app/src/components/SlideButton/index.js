import React from "react";
import Arrow from "../images/arrow.svg";

const SlideButton = () => {
  return (
    <>
      <div className="slide">
        <div className="slider-button">
          <img src={Arrow} alt="slide arrow" className="arrow reverse-arrow" />
        </div>
        <div className="slider-button path-right">
          <img src={Arrow} alt="slide arrow" className="arrow" />
        </div>
      </div>
    </>
  );
};

export default SlideButton;
