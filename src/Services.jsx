import React from "react";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      imgs: "./public/images/web.png",
      name: "Web Design",
    },
    {
      imgs: "./public/images/uiux.jpg",
      name: "UI/UX Design",
    },
    {
      imgs: "./public/images/printing2.jpg",
      name: "Print Design",
    },
  ];
  return (
    <div className=" bg-white pb-2">
      <div className=" text-center ">
        <div className="bg-white pb-5 pt-3 text-center" id="services">
          <div className="">
            <p className="heading">Our Core Services</p>
            <h1 className="services-title">Experience Allows Us To Design &</h1>
            <h1 className="services-title"> Print Things</h1>
          </div>

          <div className="col-12 d-flex flex-wrap justify-content-center  mt-5">
            {servicesData.map((items) => (
              <div className="m-3">
                <div className="images">
                  <img src={items.imgs} alt="" className="img" />
                </div>

                <div className="service-varity">{items.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
