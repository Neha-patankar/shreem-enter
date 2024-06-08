import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./Carousel-image";
import shreem1 from "../../images/img_01.png";
import shreem2 from "../../images/main-img.png";
import shreem3 from "../../images/banner-img-1.png";
import shortVideo from "../../images/video.mp4";
import "./MyCarousel.css";

function MyCarousel() {
  return (
    <div className="main" id="home">
      <div className="background-slid pt-5 pb-5 pe-5">
        <div className="container-carousel-fluid z-0 pt-3 mt-5">
          <Carousel>
            {/* First slide */}
            <Carousel.Item interval={1500}>
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-12 col-md-6 text-container">
                  <h1 className="slide-heading">Welcome to </h1>
                  <h1 className="sub-slide-heading"> Shreem Enterprises</h1>
                  <p className="paragraph mb-4 ms-5 text-light">
                    We are dedicated to providing top-notch digital services to
                    cater to all your needs. Here creativity meets functionality
                    to transform your ideas into stunning visual realities.
                  </p>
                </div>
                <div className="col-12 col-md-6 img-container ">
                  <CarouselImage
                    imgSrc={shreem1}
                    alt="Shreem Enterprises Slide 1"
                    className="slid-img-1"
                  />
                </div>
              </div>
            </Carousel.Item>

            {/* Second slide */}
            <Carousel.Item interval={1500}>
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-12 col-md-6 text-container">
                  <h4 className="heading mt-5"></h4>
                  <h1 className="heading1 pt-2 slide-heading">
                    To BRING YOUR VISION TO LIFE
                  </h1>
                  <p className="paragraph mb-4 ps-5 text-light">
                    We are dedicated to providing top-notch digital services to
                    cater to all your needs. Here creativity meets functionality
                    to transform your ideas into stunning visual realities.
                  </p>
                  <div className="d-flex gap-4"></div>
                </div>
                <div className="col-12 col-md-6 img-container">
                  <CarouselImage
                    imgSrc={shreem2}
                    alt="Shreem Enterprises Slide 2"
                  />
                </div>
              </div>
            </Carousel.Item>

            {/* Third slide */}
            <Carousel.Item interval={1500}>
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-12 col-md-6 text-container">
                  <h1 className="heading1 pt-2 slide-heading">
                    To BRING YOUR VISION TO LIFE
                  </h1>
                  <p className="paragraph mb-4 text-light ps-5">
                    We are dedicated to providing top-notch digital services to
                    cater to all your needs. Here creativity meets functionality
                    to transform your ideas into stunning visual realities.
                  </p>
                  {/* <div className="d-flex gap-4">
                    <a href="#about" className="text-decoration-none">
                      <button type="button" className="btn1">
                        DISCOVER MORE
                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </a>
                    <a href="#services" className="text-decoration-none">
                      <button type="button" className="btn2">
                        OUR SERVICES
                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                   </a>
                  </div>*/}
                </div>
                <div className="col-12 col-md-6 img-container">
                  <CarouselImage
                    imgSrc={shreem3}
                    alt="Shreem Enterprises Slide 3"
                  />
                </div>
              </div>
            </Carousel.Item>

            {/* Fourth slide with video 
            <Carousel.Item interval={1500}>
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-12 col-md-6 text-container">
                  <h4 className="heading mt-5">Experience Our Work</h4>
                  <h1 className="heading1 pt-2">Watch Our Short Video</h1>
                  <p className="paragraph mb-4">
                    Discover the essence of Shreem Enterprises through our short video showcasing our services and creativity.
                  </p>
                </div>
                <div className="col-12 col-md-6 img-container">
                  <CarouselImage videoSrc={shortVideo} alt="Shreem Enterprises Video" />
                </div>
              </div>
            </Carousel.Item>
            */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MyCarousel;
