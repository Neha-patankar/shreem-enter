import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import "./Services.css";


const Services = () => {
   
  useEffect(() => {
    AOS.init({duration: "2000"})
    }, [])

  const servicesData = [
    {
      imgs: "./public/images/designer.avif",
      p: "Our design services blend creativity and functionality, offering captivating graphic and web designs, user-friendly UI/UX, and standout packaging that elevate your brand and resonate with your audience. delivering meticulous, on-time results that resonate with your audience & set you apart.",
      name: "Designing",
    },
    {
      imgs: "./public/images/printing0.avif",
      p: "We offer different size of photocopying services, DTP services and printing services which include DTG,DTF and sublimation printing for variety of merchandise . We also design logos,brouchure and creative designs for B2B and D2C clients.",
      name: "Printing & Merchandising ",
    },
    {
      imgs: "./public/images/data.jpg",
      p: "We offer diverse data processing services, including OLAP, OLTP, real-time, manual,& automated processing, catering to big data companies & direct-to-consumer (D2C) customers, ensuring efficient & effective data management solutions for various business needs.",
      name: "Data Processing",
    },
    {
      imgs: "./public/images/web-software00.png",
      p: "We offer website & software development, including e-commerce, informational sites, blogs, portfolios, social networking, & educational platforms, meeting diverse digital needs & providing resources for global connections & learning.",
      name: "Web & Software Development",
    },
  ];
  return (
    <div data-aos="fade-right">
  

    <div className=" bg-white pb-2 pt-3" id="services">
      <div className=" text-center ">
        <div className="bg-white pb-5 pt-3 text-center">
          <div className="">
            <h1>Experience Allows Us To Design &</h1>
            <h1> Print Things</h1>
          </div>
          <div className="mt-5 pt-4 d-flex justify-content-center align-ites flex-wrap">
            <div className="wrappers">
              {servicesData.map((items) => (
                <div className="m-3 single-card">
                  <div className="front">
                    <h3 className="front-titel">{items.name}</h3>

                    <img src={items.imgs} alt="" className="img" />
                  </div>

                  <div className="Back">
                    <h5 className="fw-bold">{items.name}</h5>

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
    </div>
  );
};

export default Services;
