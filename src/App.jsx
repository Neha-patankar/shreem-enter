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
import WorkProcess from "./components/workProcess/WorkProcess";
<<<<<<< HEAD
=======
>>>>>>> 000816f87b5bffd0e2f57a478206e3739ffdc2d6
>>>>>>> c73b7c9bfb7f348d2d784d4e2005bf89c87aef81
>>>>>>> 5aec1aeb43fbb30c727795e5a8c5a268fbd35be6

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
<<<<<<< HEAD
=======
>>>>>>> 000816f87b5bffd0e2f57a478206e3739ffdc2d6
>>>>>>> c73b7c9bfb7f348d2d784d4e2005bf89c87aef81
>>>>>>> 5aec1aeb43fbb30c727795e5a8c5a268fbd35be6
      </div>
    </>
  );
}

export default App;
