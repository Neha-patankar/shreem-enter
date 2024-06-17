import React from "react";

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
