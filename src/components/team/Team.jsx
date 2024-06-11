import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import "./Team.css";

function Team() {
  useEffect(() => {
    AOS.init({duration: "3000"})
    }, [])

  return (
    <div data-aos="zoom-out-up">
   

    <div id="team">
    <div className="team-section ">
      <h1 className="text-center fw-bold fontSizeteamh">Meet Our Exclusive Team Members</h1>
      <div className="team-container">
        <div className="image-container">
          {/* 1st image */}
          <div data-aos="fade-left">
          <div className="team-member img-backgraund-color">
            <img src={img1} alt="Myron L. Boykin" className="team-image" />
            <h3 className="img-heading fontSizeteam  text-light">Myron L. Boykin</h3>
            <h1 className="designation fontSizeteam">Web Designer</h1>
          </div>
          </div>
          {/* 2nd image */}
          <div data-aos="fade-left">
          <div className="team-member img-backgraund-color">
            <img src={img2} alt="Manuel M. Brode" className="team-image" />
            <h3 className="img-heading fontSizeteam text-light">Manuel M. Brode</h3>
            <h1 className="designation fontSizeteam">Senior Developer</h1>
          </div>
          </div>
          {/* 3rd image */}
          <div data-aos="fade-right">
          <div className="team-member img-backgraund-color">
            <img src={img3} alt="Frank E. Stuber" className="team-image" />
            <h3 className="img-heading fontSizeteam text-light">Frank E. Stuber</h3>
            <h1 className="designation fontSizeteam">Web Designer</h1>
          </div>
          </div>
          {/* 4th image */}
          <div data-aos="fade-right">
          <div className="team-member img-backgraund-color">
            <img src={img4} alt="Miguel D. Vegaen" className="team-image" />
            <h3 className="img-heading fontSizeteam text-light">Miguel D. Vegaen</h3>
            <h1 className="designation fontSizeteam">Web Designer</h1>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    </div>
    </div>
  );
}

export default Team;

