import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import Accordion from "./Accordion";
import faq_image from "./assets/Image/FAQ2.png";
import "./Faq.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({duration: "500", delay:500})
    }, [])
  return (
    <div data-aos="zoom-in-right">
    <div className="container-fluid mt-3 mb-5 light_bg py-5 px-5">
      <div className="row ">
        {/* starting of Heading */}
        <div className="text-center mt-2">
          <h1>Got Questions? Find Your Answers Here!</h1>
        </div>
        {/* Ending of Heading */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="faq_img">
            <img src={faq_image} alt="" className="faq_img img-fluid" />
          </div>
        </div>
        <div className="col-lg-6">
          {/* Starting of Accordions */}
          <div className="m-5">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;
