import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Services";
import ServicesType from "./ServicesType";
import About from "./About";
import "./App.css";
import Na1 from "./components/Nav1/Na1";
import MyCarousel from "./components/myCarousel/MyCarousel";
import Footer from "./components/Footer/Footer";
import TermCondition from "./components/termsCondition/TermCondition";
import Team from "./components/team/Team";
import ContactDetail from "./Components copy/ContactDetail";
import CustomerReview from "./Components copy/CustomerReview";
import Faq from "./Components copy/Faq";
import Help from "./Components copy/Help";
import OrderServiceForm from "./Components copy/OrderServiceForm";
import Contact from "./components/whatshop/Whatshap";
import { Home } from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/whatshop/Whatshap";
import { Contactss } from "./components/Contact";
import { TermsAndCon } from "./components/TermsAndCon";
import RequestServices from "./components/RequestServices";

const states = {
  showprivacy: false,
  showContact: false,
};

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndCon />} />
        </Routes>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
