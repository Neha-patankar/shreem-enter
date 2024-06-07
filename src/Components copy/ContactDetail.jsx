import React, { useRef } from "react";
import "./Contact.css";
import { Mail, Map, MapPin, Phone } from "lucide-react";

const ContactDetail = () => {
  const borderRef = useRef([]);
  const handleHover = (index) => {
    borderRef.current[index].style.border = "4px dashed #fff";
    borderRef.current[index].style.borderRadius = "50%";
  };

   // Array of contact details
  const data = [
    {
      Icon: Phone,
      heading: "Contact Us :",
      details: "+91-860-244-0712",
      href: "tel:8602440712",
    },
    {
      Icon: Mail,
      heading: "E-mail Us :",
      details: "shreementerprises@gmail.com",
      href: "mailto:shreementerprises@gmail.com",
    },

    {
      Icon: MapPin,
      heading: "Location :",
      details:
        "28 Surya Colony behind Sarvadharam Sector-C Kolar Road Bhopal(M.P)-462042",
      href: "https://maps.app.goo.gl/njbhrYWGjWzTgy469",
    },
  ];

  return (
    <>
      <div className="container-fluid " style={{ paddingTop: "150px" }}>
        <div className="text-center">
          <h1 style={{ fontWeight: "600px" }}>Let's Talk to us.</h1>
          <p className="fs-5">
            Have any questions or just want to say hi? We would love to here
            from you.
          </p>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center gap-5 my-3">
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-5 my-5">
            {data.map((item, i) => (
<<<<<<< HEAD
              <div className="contact_box" onMouseEnter={() => handleHover(i)}>
=======
              <div
                className="contact_box"
                onMouseEnter={() => handleHover(i)}
              >
>>>>>>> 7ceb4a5814fed45276e9a4d354331f5435581309
                <div ref={(el) => (borderRef.current[i] = el)}>
                  <div className="icon">
                    <Map className="main-icon"/>
                  </div>
                </div>
                <h5>{item.heading}</h5>
                <a href={item.href} className="details text-center">
                  {item.details}
                </a>
              </div>
            ))}
          </div>

          <div
            className="w-100 d-flex justify-content-center py-5"
            style={{ backgroundColor: "#F5F6FA" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.8852139319583!2d77.41787103854367!3d23.17857751047634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43740e860d17%3A0x924bc415766ed7a2!2sSarvadharam%20C%20Sector%2C%20Shirdipuram%2C%20Kolar%20Rd%2C%20Bhopal%2C%20Gehun%20Kheda%2C%20Madhya%20Pradesh%20462042!5e0!3m2!1sen!2sin!4v1716974635044!5m2!1sen!2sin"
              width="1000"
              height="400"
              className="location-map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
