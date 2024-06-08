import React from "react";
import Accordion from "./Accordion";
import faq_image from "./assets/Image/FAQ2.png";
import "./Faq.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Faq = () => {
  const gsapRef =useRef()
  useGSAP(()=>{
    gsap.from(gsapRef.current,{
      
    })
  })
  return (
    <div className="container-fluid mt-3 mb-5 light_bg py-5 px-5">
      <div className="row ">
        {/* starting of Heading */}
        <div className="text-center mt-2">
          <p className="big-title">Got Questions? Find Your Answers Here!</p>
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
  );
};

export default Faq;
