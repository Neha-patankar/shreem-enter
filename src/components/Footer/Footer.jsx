import "./Footer.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration:1000, });
  }, []);

  return (
    <div data-aos="fade-down">
 
      <footer className="footer pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4 footer-col">
              <h5 className="footer-heading">Shreem Enterprises</h5>
              <p>
                Shreem Enterprises is dedicated<br /> to providing top-notch
                services <br /> to our clients. Our commitment <br /> to
                excellence has established us <br /> as a trusted name in the
                industry.
              </p>
            </div>
            <div className="col-md-2 mb-4 footer-col2">
              <h5>Services</h5>
              <ul className="list-footer">
                <li className="mt-2">
                  <a className="" href="/services">
                    Graphic Design
                  </a>
                </li>
                <li className="mt-2">
                  <a className="" href="/services">
                    Web Design
                  </a>
                </li>
                <li className="mt-2">
                  <a className="" href="/services">
                    UI/UX Design
                  </a>
                </li>
                <li className="mt-2">
                  <a className="" href="/services">
                    Social Media Design
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-4 footer-col3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mt-2">
                  <a
                    href="/#home"
                    className="text-light text-decoration-none"
                  >
                    Home
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/about#about"
                    className="text-light text-decoration-none"
                  >
                    About
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/contact#contact"
                    className="text-light text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/requestservices#requestservices"
                    className="text-light text-decoration-none"
                  >
                    Request a Service
                  </a>
                </li>
                <li className="mt-2">
                  <a className="" href="/team">
                    Team
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4 d-flex justify-content-center flex-column footer-col4">
              <h5>Contact Us</h5>
              <div>
                <ul className="contact-info-footer gap-2">
                  <li className="contact-detailss">
                    <a
                      href="tel:8602440712"
                      className="ms-1 fs-6 text-decoration-none"
                    >
                      <i
                        className="fa-solid fa-phone light phone-icon pe-2"
                        style={{ color: "#ff4328" }}
                      ></i>
                      8602440712
                    </a>
                  </li>
                  <li className="contact-detailss">
                    <a
                      href="mailto:info@email.com"
                      className="ms-1 fs-6 text-decoration-none"
                    >
                      <i
                        className="fa-solid fa-envelope pe-2"
                        style={{
                          color: "#ff4328",
                          textDecoration: "none",
                        }}
                      ></i>
                      shreementerprises@gmail.com
                    </a>
                  </li>
                  <li className="contact-detailss d-flex">
                    <a
                      href="https://maps.app.goo.gl/njbhrYWGjWzTgy469"
                      className="ms-1 text-white text-decoration-none fs-6 d-flex"
                    >
                      <i
                        className="fa-solid fa-location-dot pe-2"
                        style={{ color: "#ff4328" }}
                      ></i>
                      <p>
                        28, Surya Colony, behind Sarvadharam Sector-C Kolar Road
                        Bhopal(M.P)-462042
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-lg-between bbox pb-5">
            <div className="col-md-12 footer-bottom-boxed ms-3 d-flex">
              <p className="copyright_text mb-0 pl-4 sub-title-footer">
                &copy; 2024 Shreem Enterprises. All rights reserved.
              </p>
              <div className="ast-footer-site-title">
                <a
                  href="/terms-and-conditions"
                  className="linkss pe-5 me-5"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

