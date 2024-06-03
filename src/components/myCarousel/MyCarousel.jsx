import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./Carousel-image";
import shreem1 from "../../images/img_01.png";
import "./MyCarousel.css";

function MyCarousel() {
  return (
    <div className="main" id="home">
      <div className="background-slid">
        <div className="container-carousels-fluid z-0 pt-5 mt-5 ">
          <Carousel>
            {/*Fitst slid*/}
            <Carousel.Item interval={1500}>
              <div className="row ">
                <div className="col-6 ">
                  <h4 className="heading mt-5 text-bold mb-4">Welcome to Shreem Enterprises</h4>
                  <h1 className="heading1 pt-2">To BRING YOUR VISION TO LIFE</h1>
                  <p className="paragrap mb-4">
                  We are dedicated to providing top-notch digital services to cater to all your needs. Here creativity meets functionality to transform your ideas into stunning visual realities
                  </p>
                  <div className="d-flex gap-4">
                  <a href="#about" className="text-decoration-none">
                  <button type="submit" className="btn1  "   >
                    DISCOVER MORE
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                     />
                    </svg>
                  </button>
                  </a>
                  <a href="#services" className="text-decoration-none">
                  <button type="submit" className="btn2">
                    OUR SERVICES
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                  </a>
                  </div>
                </div>

                {/*image */}
                <div className="col-6 img-container">
                <CarouselImage text="" imgSrc={shreem1} />
                </div>
              </div>
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
              </Carousel.Item>

    {/*2 slider */}
             <Carousel.Item interval={1500}>
              <div className="row ">
                <div className="col-6 ">
                  <h4 className="heading mt-5">Welcome to Shreem Enterprises</h4>
                  <h1 className="heading1 pt-2">To BRING YOUR VISION TO LIFE</h1>
                  <p className="paragrap  mb-4">
                  We are dedicated to providing top-notch digital services to cater to all your needs. Here creativity meets functionality to transform your ideas into stunning visual realities
                  </p>
                  <div className="d-flex gap-4">
                  <a href="#about"  className="text-decoration-none">
                  <button type="submit" className="btn1">
                    DISCOVER MORE
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                  </a>
                  <a href="#services"  className="text-decoration-none">
                  <button type="submit" className="btn2">
                    OUR SERVICES
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                  </a>
                  </div>
                </div>

            {/*image */}
                <div className="col-6 img-container">
                <CarouselImage text="" imgSrc={shreem1} />
                </div>
              </div>
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
              </Carousel.Item>

         {/* third slid*/}
            <Carousel.Item interval={1500}>
              <div className="row ">
                <div className="col-6 ">
                  <h4 className="heading mt-5">Welcome to Shreem Enterprises</h4>
                  <h1 className="heading1 pt-2">To BRING YOUR VISION TO LIFE</h1>
                  <p className="paragrap  mb-4">
                  We are dedicated to providing top-notch digital services to cater to all your needs. Here creativity meets functionality to transform your ideas into stunning visual realities
                  </p>
                  <div className="d-flex gap-4">
                  <a href="#about"  className="text-decoration-none">
                  <button type="submit" className="btn1">
                    DISCOVER MORE
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                  </a>
                  <a href="#services"  className="text-decoration-none">
                  <button type="submit" className="btn2">
                    OUR SERVICES
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                  </a>
                  </div>
                </div>

                {/*image */}
                <div className="col-6 img-container">
                <CarouselImage text="" imgSrc={shreem1} />
                </div>
                </div>
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default MyCarousel;
