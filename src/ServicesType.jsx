import React from "react";
import "./ServicesType.css";

let typeOfservices = [
  {
    images: "./public/images/graphic.png",
    servic_name: "Graphic Design",
    dsscription:
      " Our graphic design services cover a broad spectrum, from creating eye-catching logos to designing comprehensive brand identities. We focus on ensuring that every element we create aligns perfectly with your brand's message and aesthetic ",
  },
  {
    images: "./public/images/webDesingn2.png",
    servic_name: "Web Design",
    dsscription:
      " In the digital age, a well-designed website is crucial. Our web design services offer intuitive, user-friendly, and aesthetically pleasing websites that provide an exceptional user experience. website optimized for performance and responsiveness across all devices. ",
  },
  {
    images: "./public/images/uxui1.jpg",
    servic_name: "UI/UX Design",
    dsscription:
      " User Interface (UI) and User Experience (UX) design are critical for any digital product. Our UI/UX designers craft interfaces that are not only beautiful but also highly functional, ensuring that your users enjoy a seamless and engaging experience.",
  },
  {
    images: "./public/images/print-3.jpg",
    servic_name: " Print Design",
    dsscription:
      "Despite the digital shift, print media remains a powerful tool for communication. Our print design services include brochures, business cards, posters, and more, all designed to leave a lasting impression.",
  },
  {
    images: "./public/images/Social-Media-Aesth.png",
    servic_name: " Social Media Design",
    dsscription:
      " In today's social media-driven world, having visually compelling content is more important than ever. We create engaging and on-brand graphics for all your social media platforms, ensuring your content stands out and captures your audience's attention.",
  },
  {
    images: "./public/images/packaging11.jpg",
    servic_name: " Packaging Design",
    dsscription:
      "Our packaging design encapsulates the essence of [Company Name], reflecting its core values of innovation, quality, and sustainability. The design is modern yet timeless, ensuring it appeals to our target demographic while standing out on the shelf.",
  },
];

const ServicesType = () => {
  return (
    <div className="">
      <div className="text-center ">
        <div className="containers">
          <p className="heading">Our Serviceses</p>
          <p className="services-title">
            We Provide Lot’s Of Design &<br></br> Branding Service
          </p>

          <div className="d-flex flex-wrap justify-content-center col-12">
            <div className="d-flex justify-content-center flex-wrap col-12">
              {typeOfservices.map((items, index) => (
                <div className="service-card" key={index}>
                  <img
                    src={items.images}
                    alt=""
                    className="service-cards-img"
                  />

                  <div className="d-flex flex-column">
                    <div className="service-name">
                      <span></span>
                      {items.servic_name}
                    </div>
                    <div className="discription mt-2">{items.dsscription}</div>
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

export default ServicesType;
