import React from "react";
import Services from "../Services";
import ServicesType from "../ServicesType";
import About from "../About";
import "../App.css";
import Team from "../components/team/Team";
import WorkProcess from "./workProcess/WorkProcess";

function AboutUs() {
  return (
    <>
      <About />
      <WorkProcess/>
      <Team />
     
    </>
  );
}

export default AboutUs;
