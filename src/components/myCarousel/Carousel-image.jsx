import React from "react";

function CarouselImage({ text, imgSrc }) {
  return (
    <div>
      <span>{text}</span>
      <img className="image" src={imgSrc}></img>
    </div>
  );
}

export default CarouselImage;