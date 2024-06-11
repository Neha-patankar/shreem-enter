import React from "react";
import "./ReqService.css";
import Form from "./Form";
import imgs from "./assets/Image/ContactUs.webp";

const OrderServiceForm = () => {


  return (
    
    <div
      className="container-fluid"
      id="requestservices"
    >
      {/* heading */}
      <div className="mt-5">
        <h1 className="text-center Order_Service_heading mb-3">
          Request top-notch service from us
        </h1>
     
      {/* end of heading */}

      {/* starting of Request a service form */}

      <div className="d-flex justify-content-center">
        <div className=" row gap-5">
          {/* illustration */}
          <div className="col-lg-6">
            <img src={imgs} alt="" className="OS_image img-fluid " />
          </div>
          </div>
          {/* end of illustration */}

          {/* Starting of form */}
          <Form/>
        </div>
      </div>
    </div>
    
  );
};

export default OrderServiceForm;
