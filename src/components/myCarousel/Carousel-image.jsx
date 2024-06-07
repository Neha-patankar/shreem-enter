import React, { useEffect } from "react";

function CarouselImage({ imgSrc, videoSrc, alt, text }) {
  useEffect(() => {
    if (videoSrc) {
      console.log(`Video source: ${videoSrc}`);
    }
    if (imgSrc) {
      console.log(`Image source: ${imgSrc}`);
    }
  }, [videoSrc, imgSrc]);

  return (
    <div className="carousel-media-container">
     
      {videoSrc ? (
        <>
          <video autoPlay={true} className="carousel-video" controls={false}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <img src={imgSrc} alt={alt} className="carousel-image" />
      )}
      {text && <p className="carousel-text">{text}</p>}
    </div>
  );
}

export default CarouselImage;
