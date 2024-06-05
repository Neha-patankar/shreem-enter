import React, { useState } from "react";
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
import GoToTop from "./components/goToTop/GoToTop";
<<<<<<< HEAD

import { ServicesParent } from "./components/Services";
=======
import { ServicesParent } from "./components/Services";
import WorkProcess from "./components/workProcess/WorkProcess";
>>>>>>> 795523038d4a75a2179879ffa9b9cfce6d702728

function App() {
  return (
    <>
      <div className="bg-white">
        <Na1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesParent />} />
          <Route path="/requestservices" element={<RequestServices />} />
          <Route path="/contact" element={<Contactss />} />
          <Route path="/terms-and-conditions" element={<TermsAndCon />} />
        </Routes>
        <Contacts />
        <GoToTop />
        <Footer />
<<<<<<< HEAD
=======

        <WorkProcess />
6
>>>>>>> 795523038d4a75a2179879ffa9b9cfce6d702728
      </div>
    </>
  );
}

export default App;
