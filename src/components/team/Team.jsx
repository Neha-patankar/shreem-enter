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
    AOS.init({duration: "1000"})
    }, [])

  return (
   <div data-aos="fade-up">

    <div id="team">
    <div className="team-section ">
      <h1 className="text-center fw-bold fontSizeteamh">Meet Our Exclusive Team Members</h1>
      <div className="team-container">
     
      <div className="image-container">
      
       
          {/* 1st image */}
        <div data-aos="fade-down-right"> 
          <div className="team-member img-backgraund-color">
            <img src={img1} alt="Myron L. Boykin" className="team-image" />
            <h5 className="img-heading fontSizeteam  text-light">Myron L. Boykin</h5>
            <h6 className="designation fontSizeteam">Web Designer</h6>
          </div>
        </div>

          {/* 2nd image */}
        <div data-aos="fade-down-right">
          <div className="team-member img-backgraund-color">
            <img src={img2} alt="Manuel M. Brode" className="team-image" />
            <h5 className="img-heading fontSizeteam text-light">Manuel M. Brode</h5>
            <h6 className="designation fontSizeteam">Senior Developer</h6>
          </div>
          </div>

          {/* 3rd image */}
          <div data-aos="fade-down-left">
          <div className="team-member img-backgraund-color">
            <img src={img3} alt="Frank E. Stuber" className="team-image" />
            <h5 className="img-heading fontSizeteam text-light">Frank E. Stuber</h5>
            <h6 className="designation fontSizeteam">Web Designer</h6>
          </div>
         </div>

          {/* 4th image */}
           <div data-aos="fade-down-left">
          <div className="team-member img-backgraund-color">
            <img src={img4} alt="Miguel D. Vegaen" className="team-image" />
            <h5 className="img-heading fontSizeteam text-light">Miguel D. Vegaen</h5>
            <h6 className="designation fontSizeteam">Web Designer</h6>
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
