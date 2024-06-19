import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import consult from "../../images/pic-2.png";
import research from "../../images/rp1.jpg";
import design from "../../images/ds1.png";
import review from "../../images/rf1.png";
import delivery from "../../images/delevary.png";
import "./WorkProcess.css";

function WorkProcess() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-down">
      <div className="work-container">
        <h1 className="text-center work-main-heading">Our Work Process</h1>
        <div className="d-flex justify-content-center align-items-center flex-wrap">

          <div data-aos="zoon-in-up">
            <div className="work-card">
              <img
                src={consult}
                alt="consults"
                className="mt-5 pt-5 imgs imgs1"
              ></img>
              <div className="">
                <h6 className="sub-heading work-heading">Consultation</h6>
                <p>We start with a detailed consultation to understand your requirements, goals, and vision.</p>
              </div>
            </div>
          </div>

          <div data-aos="zoon-in-up">
            <div className="work-card">
              <img
                src={research}
                alt="research"
                className="mt-5 pt-5 imgs imgs2"
              ></img>
              <div>
                <h6 className="sub-heading work-heading">Research & Planning</h6>
                <p>Our team conducts thorough research and plans the design strategy tailored to your needs.</p>
              </div>
            </div>
          </div>

          <div data-aos="zoon-in-up">
            <div className="work-card mb-2">
              <img src={design} alt="design" className="imgs imgs3"></img>
              <div>
                <h6 className="sub-heading work-heading">Design & Development</h6>
                <p>We create initial design concepts and refine them based on your feedback.</p>
              </div>
            </div>
          </div>

          <div data-aos="zoon-in-up">
            <div className="work-card">
              <img src={review} alt="review" className="mt-5 imgs imgs4"></img>
              <div>
                <h6 className="sub-heading work-heading">Review & Finalization</h6>
                <p>We review the designs with you, make necessary adjustments and finalize the design.</p>
              </div>
            </div>
          </div>

          <div data-aos="zoon-in-up">
            <div className="work-card mt-2">
              <img
                src={delivery}
                alt="delivery"
                className="imgs imgs5"
              ></img>
              <div>
                <h6 className="sub-heading work-heading">Delivery & Support</h6>
                <p>Once finalized, we deliver the design files in the required formats and offer ongoing support if needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
