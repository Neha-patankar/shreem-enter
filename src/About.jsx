import React from "react";
import "./About.css";
import Group_img from "./assets/About-img/img_05.jpg";
import aboutus from "/public/images/aboutus.jpg";
import play_icon from "./assets/About-img/play-icon.png";

const about_icon = [
  {
    imgs: "./public/About/icon_01.png",
    servicename: "Printing & Press",
    description:
      "Printing & press services deliver high-quality materials, ensuring impactful visual communication & effective brand representation.",
  },
  {
    imgs: "./public/About/online.png",
    servicename: "Web Design",
    description:
      "Web design creates visually appealing, user-friendly websites to enhance user experience, drive engagement,& brand perception.",
  },
  {
    imgs: "./public/About/3dprinting.png",
    servicename: "UI/UX Design",
    description:
      "UI/UX design is crucial for digital products, creating beautiful, functional interfaces that ensure a seamless and engaging user experience.",
  },
  {
    imgs: "./public/About/setting-icon.png",
    servicename: "Packaging Design",
    description:
      "Packaging design is essential, creating visually appealing, functional packages that protect products & enhance customer experience & brand perception.",
  },
];

const About = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center flex-wrap text-center background-icon mt-3"
        id="about"
      >
        <div className="">
          <p className="big-title">
            Design Your Dream Work With <br></br>Shreem Enterprises
          </p>
        </div>
        <div className="d-flex justify-content-around mt-5 gap-5">
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
