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
      <div className="background-slid pt-5 pb-3 pe-5">
        <div className="container-carousel-fluid z-0 pt-1  ">
          <Carousel>
            {/* First slide */}
            <Carousel.Item interval={1500}>
              <div className="row carousel-slide">
                <div className="col-12 col-md-6 text-container">
                  <h1 className="slide-heading">Web Development At</h1>
                  <h1 className="sub-slide-heading">Shreem Enterprises</h1>
                  <p className="paragraph">
                    We specialize in creating robust, scalable web solutions
                    that transform your vision into a digital masterpiece. Our
                    team of experts is dedicated to delivering high-quality web
                    development services tailored to your needs.
                  </p>
                </div>
                <div className="col-12 col-md-6 img-container ">
                  <CarouselImage
                    imgSrc={shreem1}
                    alt="Web Development Slide 1"
                    className="slid-img-1"
                  />
                </div>
              </div>
            </Carousel.Item>

            {/* Second slide */}
            <Carousel.Item interval={1500}>
              <div className="row carousel-slide">
                <div className="col-12 col-md-6 text-container ">
                  <h1 className="heading1 pt-2 slide23-heading">
                    Innovative Solutions{" "}
                  </h1>
                  <p className="paragraph">
                    Our web development services are designed to bring your
                    innovative ideas to life. We combine creativity and
                    functionality to build websites that not only look great but
                    also perform flawlessly.
                  </p>
                </div>

                <div className="col-12 col-md-6 img-container mt-5 ps-5 pt-5 pb-5">
                  <CarouselImage
                    imgSrc={shreem2}
                    alt="Web Development Slide 2"
                  />
                </div>
              </div>
            </Carousel.Item>

            {/* Third slide */}
            <Carousel.Item interval={1500}>
              <div className="row carousel-slide">
                <div className="col-12 col-md-6 text-container ">
                  <h1 className="heading1 pt-2 slide23-heading">
                    Tailored For Your Needs
                  </h1>
                  <p className="paragraph mb-4 text-light">
                    At Shreem Enterprises, we understand that every business is
                    unique. Our web development services are customized to meet
                    your specific requirements, ensuring your website is a
                    perfect fit for your business.
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
                <div className="col-12 col-md-6 img-container mt-5 mb-5 ps-5">
                  <CarouselImage
                    imgSrc={shreem3}
                    alt="Web Development Slide 3"
                    className="w-500 h-100"
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
