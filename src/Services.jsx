import React from "react";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      imgs: "./public/images/designer.avif",
      p: "Our design services blend creativity and functionality to elevate your brand's visual presence. We provide captivating graphic and web designs, user-friendly UI/UX, and standout packaging, delivering meticulous, on-time results that resonate with your audience and set you apart.",
      name: "Designing",
    },
    {
      imgs: "./public/images/uiux.jpg",
      p: "We offer different size of photocopying services, DTP services and printing services which include DTG,DTF and sublimation printing for variety of merchandise . We also design logos,brouchure and creative designs for B2B and D2C clients.",
      name: "Printing & Merchandising ",
    },
    {
      imgs: "./public/images/printing2.jpg",
      p: "We offer diverse data processing services, including OLAP, OLTP, real-time, manual, and automated processing, catering to big data companies and direct-to-consumer (D2C) customers, ensuring efficient and effective data management solutions for various business needs.",
      name: "Data Processing",
    },
    {
      imgs: "./public/images/printing2.jpg",
      p: "We offer website and software development, including e-commerce, informational sites, blogs, portfolios, social networking, and educational platforms, meeting diverse digital needs across industries and providing resources for global connections and learning.",
      name: "Website & Software Development",
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
          <div className="d-flex flex-wrap justify-content-center text-center mt-5">
            {servicesData.map((items) => (
              <div className="m-3 cards">
                <img src={items.imgs} alt="" className="img" />
                <div className="content">
                  <p className="p">{items.p}</p>
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
