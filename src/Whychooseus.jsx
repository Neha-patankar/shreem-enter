
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Whychooseus.css";

const data = [
  {
    title: "Experienced Team:",
    contents:
      " Our team of designers brings years of experience and a deep understanding of the latest design trends and technologies.",
  },
  {
    title: "Customized Solutions:",
    contents:
      " We craft custom solutions by understanding your needs to create designs that truly reflect your brand.",
  },
  {
    title: "Collaborative Approach:",
    contents:
      "We collaborate closely to ensure your vision is realized exactly as you imagined throughout the design process.",
  },
  {
    title: "Attention to Detail:",
    contents:
      "Our attention to detail ensures every aspect of the design is perfect, from icons to layout.",
  },
  {
    title: "Timely Delivery:",
    contents:
      " We understand the importance of deadlines and strive to deliver high-quality designs on time, every time.",
  },
];

const Whychooseus = () => {
  const containerRef = useRef();

  useEffect(() => {
    const items = containerRef.current.children;
    gsap.fromTo(
      items,
      { y: -100, opacity: 0 },
      {
        y: -0,
        opacity: 1,
        duration: 1,
        stagger: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column flex-wrap pt-4 pb-5">
        <h1>
          Why Choose Us <span className="qus-mark">?</span>
        </h1>
      </div>
      <div ref={containerRef} className="d-flex justify-content-center flex-wrap pt-3 mb-3">
        {data.map((items, index) => (
          <div key={index} className="circle-card">
            <div className="title">{items.title}</div>
            <div className="content-data">{items.contents}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychooseus;
