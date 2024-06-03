import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Services";
import "./App.css";
import Na1 from "./components/Nav1/Na1";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/whatshop/Whatshap";

import { TermsAndCon } from "./components/TermsAndCon";
import RequestServices from "./components/RequestServices";
import { Contactss } from "./components/Contact";

// const states = {
//   showprivacy: false,
//   showContact: false,
// };

// Placeholder components

function App() {
  // const [show, setshow] = useState(states);

  // const handlePrivacy = () => {
  //   setshow((prev) => {
  //     return { ...prev, showprivacy: true };
  //   });
  // };

  // const handleContact = () => {
  //   console.log("hey ");
  //   setshow((prev) => {
  //     return { ...prev, showContact: true };
  //   });
  // };

  return (
    <>
      <div className="bg-white">
        <div className="uparrow">
          <a href="#" id="scroll">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
        <Na1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/requestservices" element={<RequestServices />} />
          <Route path="/contact" element={<Contactss />} />
          <Route path="/terms-and-conditions" element={<TermsAndCon />} />
        </Routes>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
