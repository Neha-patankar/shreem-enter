import React from "react";
import "./Help.css";
import image from "./assets/Image/shape_02.png";
const Help = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bgContainer">
          <div className="col-md-7 z-1 ">
            <div className="text_box">
              <h2 className="small-title">Need Any Help</h2>
              <h2 className="textbox_heading">
                Always Ready To Design & Print Your Dream Works
              </h2>
              <p className="textbox_para">
              Need assistance? Our support team is here to help you with any questions or issues you may have. Contact us now for prompt and friendly service!
              </p>
              <button type="submit" className="btn1">
              DISCOVER MORE
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>

            </div>
          </div>
          <div className="col-md-5 z-1 ">
            <img src={image} alt="" className="shape img-fluid d-none d-lg-block"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
