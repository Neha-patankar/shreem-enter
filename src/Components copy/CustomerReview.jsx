import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "./assets/Image/CustomerReview.jpg";
import "./CustomerReview.css";
import UncontrolledExample from "./Slider";
const CustomerReview = () => {

  useEffect(() => {
    AOS.init({ duration: "3000", delay: 1000 });
  }, []);

  return (
    <div className="container-fluid mb-5">
      <div className="row cr_sliderbg">
        <div className="col-lg-6 cr_slider mt-5 text-center">
          <h1 className="ms-4">What Our Clients Say About</h1>
          <div data-aos="fade-up">
          <div>
            <UncontrolledExample></UncontrolledExample>
          </div>
          </div>
        </div>
        <div className="col-lg-6">
        <div data-aos="fade-up">
          <img src={image} alt="" className="cr_image img-fluid" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomerReview;
