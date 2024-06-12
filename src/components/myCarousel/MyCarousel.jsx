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
    <div className="main bg-primary" id="home">
      <div className="background-slid ">
        <div className="container-carousel-fluid z-0 pt-1 ">
          <Carousel>
            {/* First slide */}
            <Carousel.Item interval={1500}>
              <div className="row carousel-slide1    ">
                <div className="col-12 col-md-6 text-container1 ">
                  <h1 className="slide-heading ">Web Development At</h1>
                  <h1 className="sub-slide-heading">Shreem Enterprises</h1>
                  <p className="paragraph">
                    We specialize in creating robust, scalable web solutions
                    that transform your <br></br> your vision into a digital masterpiece. Our
                    team of experts is dedicated to <br></br>  delivering high-quality web
                    development services tailored to your needs.
                  </p>
                </div>
                <div className="col-12 col-md-6   ">
                  <CarouselImage
                    imgSrc={shreem1}
                    alt="Web Development Slide 1"
                    className="slid-img-1 "
                  />
                </div>
              </div>
            </Carousel.Item>

            {/* Second slide */}
            <Carousel.Item interval={1500}>
              <div className="row  carousel-slide2 ">
                <div className="col-12 col-md-6 text-container2  ">
                  <h1 className="slide-heading  ">
                    Innovative Solutions{" "}
                  </h1>
                  <p className="paragraph">
                    Our web development services are designed to bring your
                    innovative ideas <br></br> to life. We combine creativity and
                    functionality to build websites that  not<br></br> only look great but
                    also perform flawlessly.
                  </p>
                </div>

                <div className="col-12 col-md-6 img-container mt-5 ps-5 pt-5 pb-5">
                  <CarouselImage
                    imgSrc={shreem2}
                    alt="Web Development Slide 2"
                    className="w-400 h-100"
                  />
                </div>
              </div>
            </Carousel.Item>

            {/* Third slide */}
            <Carousel.Item interval={1500}>
              <div className="row carousel-slide3">
                <div className="col-12 col-md-6 text-container3   ">
                  <h1 className="slide-heading   ">
                    Tailored For Your Needs
                  </h1>
                  <p className="paragraph mb-4  text-light">
                    At Shreem Enterprises, we understand that every business is
                    unique. <br></br> Our web development services are customized to meet
                    your specific<br></br> requirements, ensuring your website is a
                    perfect fit for your business.
                  </p>
          
                </div>
                <div className="col-12 col-md-6 img-container mt-5 mb-5 ps-5 pe-5">
                  <CarouselImage
                    imgSrc={shreem3}
                    alt="Web Development Slide 3"
                    className="w-400 h-80"
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
