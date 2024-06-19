import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "./Accordion";
import faq_image from "./assets/Image/FAQ2.png";
import "./Faq.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: "3000", delay: 1000 });
  }, []);
  return (
    <div className="container-fluid light_bg py-5 px-5">
      {/* starting of Heading */}
      <div className="text-center my-2">
        <h1>Got Questions? Find Your Answers Here!</h1>
      </div>
       {/* Ending of Heading */}
      <div className="row">
        
        <div className="col-lg-6">
          <div data-aos="fade-right">
          <div className="faq_img">
            <img src={faq_image} alt="" className="faq_img img-fluid" />
          </div>
        </div>
        </div>

        <div className="col-lg-6">
        <div data-aos="fade-left">
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
