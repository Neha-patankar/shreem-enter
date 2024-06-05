import React from "react";
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import "./Team.css";

function Team() {
  return (
    <div className="team-section">
      <div className="team-intro">
        <h1 className="team-heading text-center "></h1>
        <p className="team-paragraph"></p>
     
      </div>
      <h6 className="team-heading123 text-center">Join our team</h6>
      <h1 className="text-center fw-bold">Meet Our Exclusive <br /> Team Members</h1>
      <div className="team-container">
        <div className="image-container">
          {/* 1st image */}
          <div className="team-member">
            <img src={img1} alt="Myron L. Boykin" className="team-image" />
            <h4 className="img-heading">Myron L. Boykin</h4>
            <h5 className="designation">Web Designer</h5>
          </div>
          {/* 2nd image */}
          <div className="team-member">
            <img src={img2} alt="Manuel M. Brode" className="team-image" />
            <h4 className="img-heading">Manuel M. Brode</h4>
            <h5 className="designation">Senior Developer</h5>
          </div>
          {/* 3rd image */}
          <div className="team-member">
            <img src={img3} alt="Frank E. Stuber" className="team-image" />
            <h4 className="img-heading">Frank E. Stuber</h4>
            <h5 className="designation">Web Designer</h5>
          </div>
          {/* 4th image */}
          <div className="team-member">
            <img src={img4} alt="Miguel D. Vegaen" className="team-image" />
            <h4 className="img-heading">Miguel D. Vegaen</h4>
            <h5 className="designation">Web Designer</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

