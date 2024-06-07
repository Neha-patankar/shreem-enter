import React from "react";
import "./About.css";
import aboutus from "/public/images/aboutus.jpg";
import play_icon from "./assets/About-img/play-icon.png";

const About = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center flex-wrap text-center background-icon pt-5"
        id="about"
      >
        <div className="pt-4">
          <p className="big-title">
            Design Your Dream Work With <br></br>Shreem Enterprises
          </p>
        </div>
        <div className="d-flex justify-content-around  gap-5">
          <div className="aboutus-content mt-5 gap-5 bg-white">
            <div className="d-flex">
              <img src={aboutus} className="Group-img z-0"></img>
              <img src={play_icon} className="play-btn"></img>
              <div className="ring"></div>
              <div className="ring2"></div>
            </div>
            <div className="about-content">
              <p className="about-content-p">
                Our team at Shreem Enterprises is dedicated to providing
                top-notch digital services to cater to all your needs. Located
                in the vibrant city of Bhopal, we pride ourselves on being a
                one-stop destination for a wide range of services. Whether you
                require assistance with basic tasks such as photocopying or data
                entry or seek expertise in more intricate projects like software
                development, we are here to support you every step of the way.
                <hr></hr>
                With our dedication to excellence and customer delight, we
                guarantee a smooth and successful experience with us. At Shreem
                Enterprises, our team of skilled professionals is equipped with
                the latest tools and technologies to deliver unparalleled
                services. We understand that each client has unique
                requirements, and we tailor our solutions to meet those specific
                needs. From crafting innovative software applications to
                providing meticulous data management and offering efficient
                photocopying services, we handle every project with the utmost
                care and precision. Count on Shreem Enterprises to realize your
                digital vision with accuracy and professionalism. Following the
                motto "Tech for all," we spare no effort in delivering top-notch
                services to students, professionals, and business owners alike,
                ensuring that everyone benefits from our expertise and
                commitment to quality..
              </p>
              {/* 
              <div className="about-cards">
                {about_icon.map((items) => (
                  <div className=" about-card mt-4 ms-3 p-1">
                    <div className="about-icons-div ms-3">
                      <img src={items.imgs} alt="" className="about-icons" />
                    </div>
                    <div className="about-card-titel">{items.servicename}</div>
                    <div className="about-card-description">
                      {items.description}
                    </div>

                    <a href="#read">
                      <button className="readmore-btn"> READ MORE ➔</button>
                    </a>
                  </div>
                ))}
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
