import React from "react";
import "./Whychooseus.css";
const data = [
  {
    titel: "Experienced Team:",
    contents:
      " Our team of designers brings years of experience and a deep understanding of the latest design trends and technologies.",
  },
  {
    titel: "Customized Solutions:",
    contents:
      " We craft custom solutions by understanding your needs to create designs that truly reflect your brand..",
  },
  {
    titel: "Collaborative Approach:",
    contents:
      "We collaborate closely to ensure your vision is realized exactly as you imagined throughout the design process.",
  },
  {
    titel: " Attention to Detail:",
    contents:
      "Our attention to detail ensures every aspect of the design is perfect, from icons to layout..",
  },
  {
    titel: "Timely Delivery:",
    contents:
      " We understand the importance of deadlines and strive to deliver high-quality designs on time, every time.",
  },
];

const Whychooseus = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column flex-wrap pt-4 pb-3">
        <h1 className="choose-titel">
          Why Choose Us <span className="qus-mark">?</span>
        </h1>

        <div className="d-flex justify-content-center flex-wrap pt-3">
          {data.map((items) => (
            <div className="circle-card">
              <div className="titel">{items.titel}</div>
              <div className="content-data">{items.contents}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
