import React from "react";
import Pagination from "../Pagination";
import ProductDescription from "../ProductDescription";
import StaticText from "../StaticText";
import TitleAndBrand from "../TitleAnBrand";

const HeadphonesPage = () => {
  return (
    <>
      <aside className="grid-text-left">
        <StaticText firstText="OVEREAR" secondText="HEADPHONES" />
      </aside>
      <aside className="grid-pagination">
        <Pagination />
      </aside>
      <article className="grid-title">
        <TitleAndBrand/>
      </article>
      <div className="grid-description">
        <ProductDescription/>
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
