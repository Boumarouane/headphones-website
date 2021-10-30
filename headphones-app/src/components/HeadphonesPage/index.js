import React from "react";
import StaticText from "../StaticText";
const HeadphonesPage = () => {
  return (
    <>
      <div className="grid-text-left">
        <StaticText firstText="OVEREAR" secondText="HEADPHONES" />
      </div>
      <div className="grid-pagination">pagination</div>
      <div className="grid-title">title</div>
      <div className="grid-description">
        <div>description-left</div>
        <div>description-right</div>
      </div>
      <div className="grid-slider-stars">
        <div>Slider button</div>
        <div>Price and stars</div>
      </div>
      <div className="grid-canvas">canvas</div>
    </>
  );
};

export default HeadphonesPage;
