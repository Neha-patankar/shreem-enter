import React from "react";
import Services from "../Services";
import ServicesType from "../ServicesType";
import About from "../About";
import "../App.css";
import TermCondition from "../components/termsCondition/TermCondition";
import Team from "../components/team/Team";

function AboutUs() {
  return (
    <>
      <About />
      <ServicesType />
      <Services />
      <Team />
      <TermCondition />
    </>
  );
}

export default AboutUs;
