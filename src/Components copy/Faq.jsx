import React from "react";
import Accordion from "./Accordion";
import faq_image from "./assets/Image/FAQ7.webp";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="main row" style={{backgroundColor:' #2F3369'}}>
      {/* Starting of Heading */}
      <div className="text-center">
          <h1 className="faq-heading mt-5"><span className="first-letter">F</span>requently <span className="first-letter ">A</span>sked <div><span className="first-letter">Q</span>uestions</div></h1>
        </div>
        {/* Ending of Heading */}

      <div className="col-lg-6 faq_img m-0 p-0">
        <img src={faq_image} alt="" className="faq_img img-fluid" />
      </div>

      <div className="accordion_section col-lg-6 pt-3">
        
        {/* Starting of Accordions */}
        <div className="border m-5">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
