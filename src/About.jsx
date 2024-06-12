
import "./About.css";
import aboutus from "/public/images/aboutus.jpg";
import play_icon from "./assets/About-img/play-icon.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, delay:1000 });
  }, []);

  return (
    <>
    
      <div
        className="d-flex justify-content-center flex-wrap text-center background-icon pt-5"
        id="about"
      > <div data-aos="fade-right">
        <div className="pt-4">
          <h1>
            Design Your Dream Work With <br></br>Shreem Enterprises
          </h1>
        </div>
        </div>
        <div className="d-flex justify-content-around  gap-5">
          <div className="aboutus-content mt-5 gap-5 bg-white">
            <div className="d-flex">
              <img src={aboutus} className="Group-img z-0"></img>
              <img src={play_icon} className="play-btn"></img>
              <div className="ring"></div>
              <div className="ring2"></div>
            </div>
            
            <div data-aos="fade-left">
            <div className="about-content">
              <p className="about-content-p">
                Our team at Shreem Enterprises is dedicated to providing
                top-notch digital services to cater to all your needs. Located
                in the vibrant city of Bhopal, we pride ourselves on being a
                one-stop destination for a wide range of services. Whether you
                require assistance with basic tasks such as photocopying or data
                entry or seek expertise in more intricate projects like software
                development, we are here to support you every step of the way.
                <hr className="content-lines"></hr>
                Our dedication to excellence and customer delight, we guarantee
                a smooth and successful experience with us. At Shreem
                Enterprises, our team of skilled professionals is equipped with
                the latest tools and technologies to deliver unparalleled
                {/* services. We understand that each client has unique
                requirements, and we tailor our solutions to meet those specific
                needs. From crafting innovative software applications to
                providing meticulous data management and offering efficient
                photocopying services, we handle every project with the utmost
                care and precision.*/}
                Count on Shreem Enterprises to realize your digital vision with
                accuracy and professionalism. Following the motto "Tech for
                all," we spare no effort in delivering top-notch services to
                students, professionals, and business owners alike, ensuring
                that everyone benefits from our expertise and commitment to
                quality..
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
