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
        <h1 className="team-heading text-center ">OUR TEAM</h1>
        <p className="team-paragraph">Our team at Shreem is devoted to delivering exceptional services in Data Processing, Desktop Publishing, Website Development, and Software Development. With extensive experience and a drive for innovation, we strive to assist you in achieving your digital objectives with utmost efficiency and efficacy. Whether you require aid in data organization and analysis, crafting visually captivating publications, constructing user-friendly websites, or creating bespoke software solutions, our experts are dedicated to guiding you through the process. Place your trust in Shreem to realize your digital aspirations with accuracy and proficiency.</p>
        <p className="team-paragraph">Welcome to our Shreem Enterprises, where creativity meets functionality to transform your ideas into stunning visual realities. Whether you're a startup looking to establish a strong brand identity or an established business aiming to refresh your visual presence, our expert design team is here to bring your vision to life.</p>
      </div>
      <h6 className="team-heading text-center">Join our team</h6>
      <h1 className="text-center fw-bold">Meet Our Exclusive <br /> Team Members</h1>
      <div className="team-container">
        <div className="image-container">
          {/* 1st image */}
          <div className="team-member">
            <img src={img1} alt="Myron L. Boykin" className="team-image" />
            <h3 className="img-heading">Myron L. Boykin</h3>
            <h5 className="designation">Web Designer</h5>
          </div>
          {/* 2nd image */}
          <div className="team-member">
            <img src={img2} alt="Manuel M. Brode" className="team-image" />
            <h3 className="img-heading">Manuel M. Brode</h3>
            <h5 className="designation">Senior Developer</h5>
          </div>
          {/* 3rd image */}
          <div className="team-member">
            <img src={img3} alt="Frank E. Stuber" className="team-image" />
            <h3 className="img-heading">Frank E. Stuber</h3>
            <h5 className="designation">Web Designer</h5>
          </div>
          {/* 4th image */}
          <div className="team-member">
            <img src={img4} alt="Miguel D. Vegaen" className="team-image" />
            <h3 className="img-heading">Miguel D. Vegaen</h3>
            <h5 className="designation">Web Designer</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

