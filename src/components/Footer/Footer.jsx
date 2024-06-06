// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer  pt-4 h-100 w-100 ">
//     <div className="containerrs  "> 
//         <div className="row ">
//           <div className="col-md-3 mb-4 ">
//             <h5 className="lblack ">Shreem Enterprises</h5>
//             <p className="m-10 p-50">
//               Shreem Enterprises is dedicated<br></br> to providing top-notch services <br></br>to
//               our clients. Our commitment <br></br> to excellence has established us <br></br>as a
//               trusted name in the industry.
//             </p>
//           </div>
//           <div className="col-md-3 mb-4">
//             <h5 className="lblack">Services</h5>
//             <ul className="list-footer ">
//               <li className="mt-2">Graphic Design</li>
//               <li className="mt-2">Web Design</li>
//               <li className="mt-2">UI/UX Design</li>
//               <li className="mt-2">Print Design</li>
//               <li className="mt-2"> Social Media Design</li>
//               <li className="mt-2">Packaging Design</li>

//             </ul> 
//           </div>

//           <div className="col-md-3 mb-4 ">
//             <h5 className="lblack">Quick Links</h5>
//             <ul className="list-unstyled  ">
//               <li className="mt-2 ">
//                 <a href="#home" className="text-dark text-decoration-none " >Home</a>
//               </li>
//               <li className="mt-2" >
//                 <a href="#about" className="text-dark text-decoration-none" >About</a>
//               </li>
//               <li className="mt-2">
//                 <a href="#services" className="text-dark text-decoration-none" >Services</a>
//               </li>
//               <li className="mt-2">
//                 <a href="#requestservices" className="text-dark text-decoration-none"  > Request a Services</a>
//               </li>
//               <li className="mt-2 tbalck" >
//                 <a href="#contact" className="text-dark text-decoration-none " >Contact</a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-3 mb-4">
//             <h5 className="lblack">Contact Us</h5>
//             <div className="contact-info">
//                 <ul style={{ listStyleType: "none" }} className="me-5">
//                   <li className="contact-details ">
//                     <i
//                       class="fa-solid fa-phone"
//                       style={{ color: "#ff4328" }}
//                     ></i>
//                     <a
//                       href="tel:8602440712"
//                       className="ms-3 fs-6 text-decoration-none"
//                       style={{ color: "#ffff" }}
//                     >
//                       8602440712
//                     </a>
//                   </li>
//                   <li className="contact-details">
//                     <i
//                       class="fa-solid fa-envelope"
//                       style={{ color: " #ff4328" }}
//                     ></i>
//                     <a
//                       href="mailto:info@email.com"
//                       className="ms-3 fs-6 text-decoration-none"
//                       style={{ color: "#ffff" }}
//                     >
//                       {" "}
//                       info@email.com
//                     </a>
//                   </li>
//                   <li className="contact-details d-flex">
//                     <div>
//                       <i
//                         class="fa-solid fa-location-dot"
//                         style={{ color: "#ff4328" }}
//                       ></i>
//                     </div>
//                     <a href="https://maps.app.goo.gl/njbhrYWGjWzTgy469" className="ms-4 text-white text-decoration-none fs-6">
//                       28,Surya Colony,behind Sarvadharam <br /> Sector-C Kolar
//                       Road Bhopal(M.P)-462042
//                     </a>
//                   </li>
//                 </ul>
//               </div>
         
//           </div>
//         </div>
        
//      <div className="row  align-items-center justify-content-lg-between bbox ">
//           <div className="col-md-12 footer-bottom-boxed mr-5 d-flex ">
//             <p className="copyright_text mb-0  pl-4 sub-title-footer ">&copy; 2024 Shreem Enterprises. All rights reserved.</p>
           
//            <div className="ast-footer-site-title">
//            <div className=""> <a href="/terms-and-conditions" className="linkss  " > Terms & Conditions</a></div>
//            </div>
          
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer pt-4 h-100 w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 ">
            <h5 className="footer-heading">Shreem Enterprises</h5>
            <p>
              Shreem Enterprises is dedicated<br /> to providing top-notch services <br /> to
              our clients. Our commitment <br /> to excellence has established us <br /> as a
              trusted name in the industry.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Services</h5>
            <ul className="list-footer">
              <li className="mt-2">Graphic Design</li>
              <li className="mt-2">Web Design</li>
              <li className="mt-2">UI/UX Design</li>
              <li className="mt-2">Print Design</li>
              <li className="mt-2">Social Media Design</li>
              <li className="mt-2">Packaging Design</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mt-2">
                <a href="#home" className="text-light text-decoration-none">Home</a>
              </li>
              <li className="mt-2">
                <a href="#about" className="text-light text-decoration-none">About</a>
              </li>
              <li className="mt-2">
                <a href="#services" className="text-light text-decoration-none">Services</a>
              </li>
              <li className="mt-2">
                <a href="#requestservices" className="text-light text-decoration-none">Request a Service</a>
              </li>
              <li className="mt-2">
                <a href="#contact" className="text-light text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4 d-flex justify-content-ceter flex-column">
            <h5>Contact Us</h5>
            <div className="">
              <ul className="contact-info-footer">
                <li className="contact-detailss ">
                
                  <a href="tel:8602440712" className="ms-1 fs-6  text-decoration-none">  <i className="fa-solid fa-phone light phone-icon pe-2" style={{ color: "#ff4328" }}></i>8602440712</a>
                </li>
                <li className="contact-detailss">
                  
                  <a href="mailto:info@email.com" className="ms-1 fs-6 text-decoration-none" ><i className="fa-solid fa-envelope pe-2" style={{ color: "#ff4328",textDecoration:"none" }}></i>info@email.com</a>
                </li>
                
                <li className="contact-detailss d-flex">
                
                  <a href="https://maps.app.goo.gl/njbhrYWGjWzTgy469" className="ms-1 text-white text-decoration-none fs-6"> <i className="fa-solid fa-location-dot pe-2" style={{ color: "#ff4328" }}></i>
                    28, Surya Colony, behind Sarvadharam<br /> Sector-C Kolar Road Bhopal(M.P)-462042
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-lg-between bbox">
          <div className="col-md-12 footer-bottom-boxed mr-5 d-flex">
            <p className="copyright_text mb-0 pl-4 sub-title-footer">
              &copy; 2024 Shreem Enterprises. All rights reserved.
            </p>
            <div className="ast-footer-site-title">
              <a href="/terms-and-conditions" className="linkss">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
