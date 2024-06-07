import React, { useRef } from "react";
import "./Contact.css";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactDetail = () => {
  const borderRef = useRef([]);
  const handleHover = (index) => {
    console.log(index);
    borderRef.current[index].style.border = "4px dashed #fff";
    // borderRef.current[index].style.border = "10px";
    borderRef.current[index].style.borderRadius ="50%";
  };

  // const handleRemoveHover = (index) => {
  //   borderRef.current[index].style.border = "4px dashed #2f3369  ";
  //   borderRef.current[index].style.borderRadius ="50%";
  // };
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
          <h1 className="big-title">Let's Talk to us.</h1>
          <p className="fs-5">
            Have any questions or just want to say hi? We would love to here
            from you.
          </p>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center gap-5 my-3">
            {/* <div
              className="contact_box"
              onMouseEnter={handleHover}
              onMouseLeave={handleRemoveHover}
            >
              <div>
                <i class="fa-solid fa-phone icon" ref={borderRef}></i>
              </div>
              <div className="mt-3">
                <h5 className="info_Heading">Contact Us :</h5>
              </div>
              <div>
                <a href="tel:8602440712" className="details">
                  <span style={{ color: "inherit" }}>+91-860-244-0712</span>
                </a>
              </div>
            </div>
            <div
              className="contact_box"
              onMouseEnter={handleHover}
              onMouseLeave={handleRemoveHover}
            >
              <div className="circle2">
                <i class="fa-solid fa-envelope icon" ref={borderRef}></i>
              </div>
              <div className="mt-3">
                <h5 className="info_Heading">Mail Us :</h5>
              </div>
              <div>
                <a href="mailto:info@email.com" className="details">
                  info@email.com
                </a>
              </div>
            </div>
            <div
              className="contact_box"
              onMouseEnter={handleHover}
              onMouseLeave={handleRemoveHover}
            >
              <div>
                <i ref={borderRef} class="fa-solid fa-location-dot icon"></i>
              </div>
              <div className="mt-4">
                <h5 className="info_Heading">Location :</h5>
              </div>
              <div>
                <a
                  href="https://maps.app.goo.gl/njbhrYWGjWzTgy469"
                  className="details"
                >
                  28,Surya Colony,behind Sarvadharam Sector-C Kolar Road
                  Bhopal(M.P) - 462042
                </a>
              </div>
            </div>*/}
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-5 my-5">
            {data.map((item, i) => (
              <div className="contact_box" onMouseEnter={() => handleHover(i)} >
                <div ref={(el) => (borderRef.current[i] = el)}>
                  <div className="icon"><item.Icon/></div>
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
      {/* <div className="container-fluid Contact_container_bg" id="contact">
        <div className="d-flex flex-column justify-content-center align-items-center mb-5">
          <p className="big-title text-center">
            Have any questions or just want to say hi?</p>
          <h4 className="">Contact us</h4>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.8852139319583!2d77.41787103854367!3d23.17857751047634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43740e860d17%3A0x924bc415766ed7a2!2sSarvadharam%20C%20Sector%2C%20Shirdipuram%2C%20Kolar%20Rd%2C%20Bhopal%2C%20Gehun%20Kheda%2C%20Madhya%20Pradesh%20462042!5e0!3m2!1sen!2sin!4v1716974635044!5m2!1sen!2sin"
                width="700"
                height="500"
                className="location-map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
      
          <div className="col-lg-6">
            <div className="contact_container">
              <div>
                <h1 className="contact-heading">Let's Talk to us.</h1>
                <p className="contact-text">
                  Have any questions or just want to say hi? <br />
                  We would love to here from you.
                </p>
              </div>
              <div className="contact-info">
                <ul style={{ listStyleType: "none" }} className="me-5">
                  <li className="contact-details ">
                    <i
                      class="fa-solid fa-phone"
                      style={{ color: "#ff4328" }}
                    ></i>
                    <a
                      href="tel:8602440712"
                      className="ms-3 fs-6 text-decoration-none"
                      style={{ color: "#ffff" }}
                    >
                      8602440712
                    </a>
                  </li>
                  <li className="contact-details">
                    <i
                      class="fa-solid fa-envelope"
                      style={{ color: " #ff4328" }}
                    ></i>
                    <a
                      href="mailto:info@email.com"
                      className="ms-3 fs-6 text-decoration-none"
                      style={{ color: "#ffff" }}
                    >
                      
                      info@email.com
                    </a>
                  </li>
                  <li className="contact-details d-flex">
                    <div>
                      <i
                        class="fa-solid fa-location-dot"
                        style={{ color: "#ff4328" }}
                      ></i>
                    </div>
                    <a href="https://maps.app.goo.gl/njbhrYWGjWzTgy469" className="ms-4 text-white text-decoration-none fs-6">
                      28,Surya Colony,behind Sarvadharam <br /> Sector-C Kolar
                      Road Bhopal(M.P)-462042
                    </a>
                  </li>
                </ul>
              </div>
             
              <div>
                <h1 className="contacting-hours-heading">Working Hours</h1>
                <p className="contact-text">
                  We’re available from{" "}
                  <span style={{ fontWeight: "bold" }}>10 am – 6 pm,</span>
                  <br />
                  05 days a week
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContactDetail;
