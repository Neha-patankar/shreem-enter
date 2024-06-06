import React from "react";
import Accordion from "./Accordion";
import faq_image from "./assets/Image/FAQ7.webp";
import "./Faq.css";

const Faq = () => {
  return (
    <div
      className="container-fluid px-5 "
      style={{ backgroundColor: " #2F3369" }}
    >

      <div className="row">
        {/* starting of Heading */}
      <div className="text-center mt-4">
        <p className="big-title text-white ">
          Got Questions? <br /> Find Your Answers Here!
        </p>
      </div>
      {/* Ending of Heading */}
        <div className="col-lg-6">
          <div className="d-flex justify-content-center faq_img">
            <img src={faq_image} alt="" className="faq_img img-fluid" />
          </div>
        </div>
        <div className="col-lg-6">
           {/* Starting of Accordions */}
         <div className="border" style={{marginTop:'50px', marginRight:"70px"}}>
          <Accordion />
        </div>
        </div>
      </div>
    </div>

    // <div className="container-fluid row" style={{backgroundColor:' #2F3369'}}>
    //   {/* Starting of Heading */}
    // <div className="text-center">
    //     <h1 className="small-title mt-5">
    //       FAQ
    //     </h1>
    //  <p className="big-title text-white">Got Questions? Find Your Answers Here!</p>
    //   </div>
    //   {/* Ending of Heading */}

    //   <div className="col-lg-6 faq_img">
    //     <img src={faq_image} alt="" className="faq_img img-fluid"/>
    //   </div>

    //   <div className="accordion_section col-lg-6 pt-3">

    //     {/* Starting of Accordions */}
    //     <div className="border m-5">
    //       <Accordion />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Faq;
