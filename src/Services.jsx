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
      imgs: "./public/images/printingM.avif",
      p: "We offer different size of photocopying services, DTP services and printing services which include DTG,DTF and sublimation printing for variety of merchandise . We also design logos,brouchure and creative designs for B2B and D2C clients.",
      name: "Printing & Merchandising ",
    },
    {
      imgs: "./public/images/data.jpg",
      p: "We offer diverse data processing services, including OLAP, OLTP, real-time, manual, and automated processing, catering to big data companies and direct-to-consumer (D2C) customers, ensuring efficient and effective data management solutions for various business needs.",
      name: "Data Processing",
    },
    {
      imgs: "./public/images/web-software4.jpg",
      p: "We offer website & software development, including e-commerce, informational sites, blogs, portfolios, social networking, & educational platforms, meeting diverse digital needs across industries & providing resources for global connections & learning.",
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
          <div className="mt-5 d-flex justify-content-center flex-wrap">
            <div className=" wrappers">
              {servicesData.map((items) => (
                <div className="m-3 single-card">
                  <div className="front">
                    <div className="front-titel">{items.name}</div>
                    <img src={items.imgs} alt="" className="img" />
                  </div>

                  <div className="Back">
                    <div className="titel">{items.name}</div>

                    <div className="card-content">
                      <p className="">{items.p}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
