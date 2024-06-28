

import React, { useEffect, useRef } from "react";
import gsap from 'gsap';

import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import "./Team.css";

function Team() {
  const gsapRef = useRef();
  const imagesRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      gsapRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1 }
    ).fromTo(
      imagesRef.current.children,
      { y: 100, opacity: 0 },
      { y: -0, opacity: 1, duration: 1, stagger: 1, delay: 1 }
    );
  }, []);

  return (
    <div id="team">
      <div className="team-section">
        <h1 ref={gsapRef} className="text-center fw-bold fontSizeteamh team-heading">Meet Our Exclusive Team Members</h1>
        <div ref={imagesRef} className="team-container">
          <div className="image-container">
            {/* 1st image */}
            <div className="team-member img-backgraund-color">
              <img src={img1} alt="Myron L. Boykin" className="team-image" />
              <h5 className="img-heading fontSizeteam text-light">Myron L. Boykin</h5>
              <h6 className="designation fontSizeteam">Web Designer</h6>
            </div>

            {/* 2nd image */}
            <div className="team-member img-backgraund-color">
              <img src={img2} alt="Manuel M. Brode" className="team-image" />
              <h5 className="img-heading fontSizeteam text-light">Manuel M. Brode</h5>
              <h6 className="designation fontSizeteam">Senior Developer</h6>
            </div>

            {/* 3rd image */}
            <div className="team-member img-backgraund-color">
              <img src={img3} alt="Frank E. Stuber" className="team-image" />
              <h5 className="img-heading fontSizeteam text-light">Frank E. Stuber</h5>
              <h6 className="designation fontSizeteam">Web Designer</h6>
            </div>

            {/* 4th image */}
            <div className="team-member img-backgraund-color">
              <img src={img4} alt="Miguel D. Vegaen" className="team-image" />
              <h5 className="img-heading fontSizeteam text-light">Miguel D. Vegaen</h5>
              <h6 className="designation fontSizeteam">Web Designer</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
