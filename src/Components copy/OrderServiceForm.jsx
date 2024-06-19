import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ReqService.css";
import Form from "./Form";
import imgs from "./assets/Image/ContactUs.webp";

const OrderServiceForm = () => {
  useEffect(() => {
    AOS.init({ duration: "500", delay: 1000 });
  }, []);

  return (
    <div className="container-fluid" id="requestservices">
      {/* heading */}
      <div className="mt-5">
        <h1 className="text-center Order_Service_heading mb-3">
          Request top-notch service from us
        </h1>

        {/* end of heading */}

        {/* starting of Request a service form */}

        <div className="d-flex justify-content-center">
          <div className=" row">
            {/* illustration */}
            <div className="col-lg-6">
              <div data-aos=" fade-up">
                <img src={imgs} alt="" className="OS_image img-fluid " />
              </div>
            </div>
            {/* end of illustration */}

            {/* Starting of form */}
            <div className="col-lg-6">
            <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderServiceForm;
