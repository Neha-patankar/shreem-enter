import React from "react";
import Services from "../Services";
import ServicesType from "../ServicesType";
import About from "../About";
import "../App.css";
import TermCondition from "../components/termsCondition/TermCondition";
import Team from "../components/team/Team";
import WorkProcess from "./workProcess/WorkProcess";

function AboutUs() {
  return (
    <>
      <About />
      <WorkProcess/>
      <Team />
      <TermCondition />
    </>
  );
}

export default AboutUs;
